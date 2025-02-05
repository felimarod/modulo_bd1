import { peticion } from "../services/database.js";
import { v4 as uuidv4 } from 'uuid';


function generateShortUuid() {
  return uuidv4().replace(/-/g, "").substring(0, 4);
}

/**
 * Formatear los datos del Mensaje
 * @param {Array} Mensaje - Arreglo con los datos del Mensaje
 * @returns Objeto con los datos del Mensaje
 */
const formatearMensaje = (Mensaje) =>
  Mensaje.length === 8
    ? {
        idMensaje: Mensaje[0],
        asunto: Mensaje[1],
        cuerpoMensaje: Mensaje[2],
        idTipoCarpeta: Mensaje[3],
        fechaAccion: Mensaje[4],
        horaAccion: Mensaje[5],
        usuario: Mensaje[6],
        idCategoria: Mensaje[7],
      }
    : {
        asunto: Mensaje[0],
        cuerpoMensaje: Mensaje[1],
        idTipoCarpeta: Mensaje[2],
        fechaAccion: Mensaje[3],
        horaAccion: Mensaje[4],
        usuario: Mensaje[5],
        idCategoria: Mensaje[6],
      };

async function obtenerTodosLosMensajes() {
  return await peticion("select * FROM MENSAJE", []);
}

async function obtenerMensajePorId(id) {
  return (
    await peticion("select * FROM MENSAJE WHERE idMensaje = :idMensaje", [id])
  )[0];
}

/**
 * Crear un Mensaje
 * @param {Array} Mensaje - Array con los datos de la Mensaje
 * @returns Mensaje creado
 */
async function crearMensaje(Mensaje,consecContacto,usuario) {
  const idmensaje = generateShortUuid();
  await peticion(
    `INSERT INTO Mensaje (idMensaje, asunto, cuerpoMensaje, idTipoCarpeta, fechaAccion, horaAccion, usuario, idCategoria) 
    VALUES (:idmensaje, :asunto, :cuerpoMensaje, :idTipoCarpeta,SYSDATE,SYSTIMESTAMP, :usuario,'PRI')`,
    [idmensaje,Mensaje[0],Mensaje[1],Mensaje[2],Mensaje[5]]
  );
  crearDestinatario(idmensaje,Mensaje,consecContacto,usuario)
  return 
} 

/**
 * Crear un Destinatario
 * @param {Array} Mensaje - Array con los datos del Mensaje
 * @returns Mensaje creado
 */
async function crearDestinatario(idMensaje,Mensaje,consecContacto,usuario) {
  console.log(Mensaje);
  let pais = '';
  if (usuario===undefined){
    pais = '000';
  }
  else{
    pais=usuario[8];
  }
  console.log(idMensaje,consecContacto);
  console.log(usuario);
  console.log(pais);
  return await peticion(
  `INSERT INTO Destinatario (idMensaje,usuario,consecContacto,idTipoCopia,idPais) VALUES (:idmensaje,:usuario,:conseccontacto,'CO',:pais)`,[idMensaje,Mensaje[5],consecContacto,pais]
  )
} 


/**
 * Actualizar el Mensaje
 * @param {Array} valoresMensaje - Arreglo con los valores del Mensaje a actualizar
 * @returns Resultado de la petición
 */
async function actualizarMensaje(valoresMensaje) {
  // ignorar primer posicion del arreglo valores_Mensajes y guardarlo en una nueva variable llamada id
  const id = valoresMensaje.shift();
  return await peticion(
    `UPDATE Mensaje SET asunto = :asunto, cuerpoMensaje = :cuerpoMensaje, idTipoCarpeta = :idTipoCarpeta, fechaAccion = :fechaAccion, horaAccion = :horaAccion, usuario = :usuario, idCategoria = :idCategoria
    WHERE idMensaje = :idMensaje`,
    [...valoresMensaje, id]
  );
}

async function obtenerMensajesPorUsuarioYCategoria(idUsuario, idCategoria) {
  const respuestaDB = await peticion(
    `select m.idmensaje mensaje,
            e.nombre
            || ' '
            || e.apellido emisor,
            m.asunto asunto,
            to_char(m.fechaaccion, 'DD/MM/YYYY')
            || ' '
            || to_char(
               m.horaaccion,
               'HH24:mm'
            ) fecha
       from mensaje m,
            contacto c,
            destinatario d,
            usuario u,
            usuario e
      where m.idmensaje = d.idmensaje
        and d.conseccontacto = c.conseccontacto
        and c.usuario_1 = u.usuario
        and m.usuario = e.usuario
        and c.usuario_1 like :idUsuario
        and m.idcategoria like :idCategoria`,
    [idUsuario, idCategoria]
  );
  return respuestaDB.map((val) => {
    return {
      idMensaje: val[0],
      remitente: val[1],
      asunto: val[2],
      fecha: val[3],
    };
  });
}

async function agregarMensaje(Mensaje,correo){
  const respuestaU = await peticion(
   'SELECT * FROM usuario U where U.correoalterno like :correo',[correo]
  );
  const respuestaC = await peticion(
   'SELECT distinct * FROM contacto C where C.correocontacto like :correo',[correo]
  );
  if (respuestaU.length!==0){
   if (respuestaC.length===0){
      peticion(
       'INSERT INTO contacto (nombreContacto,correoContacto,usuario,usuario_1) VALUES (:nombreContacto,:correoContacto,:idUsuario,:idUsuario_1 )', [respuestaU[0][1],respuestaU[0][5],Mensaje[5],respuestaU[0][0]]
     );
   }
  }
  else{
   if (respuestaC.length===0){
      peticion(
       'INSERT INTO contacto (nombreContacto,correoContacto,usuario,usuario_1) VALUES (null,:correo,:idUsuario,null)',[correo,Mensaje[5]]
      );
   }
  } 
  const idContacto = await peticion('SELECT consecContacto from contacto WHERE lower(correoContacto) like :correo',[correo]);
  console.log(idContacto[0][0]);
  crearMensaje(Mensaje,idContacto[0][0],respuestaU[0]);
  }

async function obtenerRecibidosDeUsuario(idUsuario) {
  const respuestaDB = await peticion(
    `select m.idmensaje mensaje,
            e.nombre
            || ' '
            || e.apellido emisor,
            m.asunto asunto,
            to_char(m.fechaaccion, 'DD/MM/YYYY')
            || ' '
            || to_char(
               m.horaaccion,
               'HH24:mm'
            ) fecha
       from mensaje m,
            contacto c,
            destinatario d,
            usuario u,
            usuario e
      where m.idmensaje = d.idmensaje
        and d.conseccontacto = c.conseccontacto
        and m.idtipocarpeta like 'Rec'
        and c.usuario_1 = u.usuario
        and m.usuario = e.usuario
        and c.usuario_1 like :idUsuario`,
    [idUsuario]
  );
  return respuestaDB.map((val) => {
    return {
      idMensaje: val[0],
      remitente: val[1],
      asunto: val[2],
      fecha: val[3],
    };
  });
}

async function obtenerBorradoresDeUsuario(idUsuario) {
  const respuestaDB = await peticion(
    `select m.idmensaje "idMensaje",
            m.asunto "asunto",
            u.NOMBRE || ' ' || u.APELLIDO "destinatario",
            tc.idtipocopia
       from mensaje m,
            destinatario d,
            contacto c,
            tipocopia tc,
            usuario u
      where m.idmensaje = d.idmensaje
        and m.usuario = d.usuario
        and c.conseccontacto = d.conseccontacto
        and d.idtipocopia = tc.idtipocopia
        and (d.idtipocopia like 'CO' or  d.idtipocopia like 'COO')
        and m.idtipocarpeta like 'Bor'
        and m.usuario = :idUsuario
        and u.USUARIO = c.USUARIO_1
      order by d.idtipocopia`,
    [idUsuario]
  );

  let mensajes = [];

  respuestaDB.forEach((reg, i) => {
    let nombreCO = reg[3] === "CO" ? reg[2] : "";
    let nombreCOO = reg[3] === "COO" ? reg[2] : "";
    let fecha = reg[4];

    if (
      mensajes.some((val) => {
        return val.idMensaje === reg[0];
      })
    ) {
      let otrosMensajes = mensajes.filter((val) => {
        return val.idMensaje !== reg[0];
      });
      let mensajeActual = mensajes.filter((val) => {
        return val.idMensaje === reg[0];
      })[0];

      mensajeActual.CO =
        nombreCO !== "" ? `${mensajeActual.CO},${nombreCO}` : mensajeActual;
      mensajeActual.CCO =
        nombreCOO !== "" ? `${mensajeActual.CCO},${nombreCOO}` : mensajeActual;

      mensajes = [...otrosMensajes, mensajeActual];
    } else {
      mensajes = [
        ...mensajes,
        {
          idMensaje: reg[0],
          asunto: reg[1],
          CO: nombreCO,
          CCO: nombreCOO,
          fecha,
        },
      ];
    }
  });
  return mensajes;
}

async function obtenerEnviadosPorUsuario(idUsuario) {
  const respuestaDB = await peticion(
    `select m.idmensaje "idMensaje",
            m.asunto "asunto",
            u.NOMBRE || ' ' || u.APELLIDO "destinatario",
            tc.idtipocopia,
            to_char(m.fechaaccion, 'DD/MM/YYYY')
            || ' '
            || to_char(
               m.horaaccion,
               'HH24:mm'
            ) fecha
       from mensaje m,
            destinatario d,
            contacto c,
            tipocopia tc,
            usuario u
      where m.idmensaje = d.idmensaje
        and m.usuario = d.usuario
        and c.conseccontacto = d.conseccontacto
        and d.idtipocopia = tc.idtipocopia
        and ( d.idtipocopia like 'CO'
         or d.idtipocopia like 'COO' )
        and m.idtipocarpeta like 'Env'
        and u.USUARIO = c.USUARIO_1
        and m.usuario = :idUsuario
      order by d.idtipocopia`,
    [idUsuario]
  );
  let mensajes = [];

  respuestaDB.forEach((reg, i) => {
    let nombreCO = reg[3] === "CO" ? reg[2] : "";
    let nombreCOO = reg[3] === "COO" ? reg[2] : "";
    let fecha = reg[4];

    if (
      mensajes.some((val) => {
        return val.idMensaje === reg[0];
      })
    ) {
      let otrosMensajes = mensajes.filter((val) => {
        return val.idMensaje !== reg[0];
      });
      let mensajeActual = mensajes.filter((val) => {
        return val.idMensaje === reg[0];
      })[0];

      mensajeActual.CO =
        nombreCO !== "" ? `${mensajeActual.CO},${nombreCO}` : mensajeActual;
      mensajeActual.CCO =
        nombreCOO !== "" ? `${mensajeActual.CCO},${nombreCOO}` : mensajeActual;

      mensajes = [...otrosMensajes, mensajeActual];
    } else {
      mensajes = [
        ...mensajes,
        {
          idMensaje: reg[0],
          asunto: reg[1],
          CO: nombreCO,
          CCO: nombreCOO,
          fecha,
        },
      ];
    }
  });
  return mensajes;
}
async function obtenerInfoCompleta(idMensaje) {
  const resMensaje = await peticion(
    `select 
       m.idmensaje "idMensaje",
       r.nombre
       || ' '
       || r.apellido remitente,
       m.asunto "asunto",
       m.CUERPOMENSAJE "cuerpoMensaje",
       u.nombre
       || ' '
       || u.apellido "destinatario",
       d.idTipoCopia tipoCopia
  from mensaje m,
       destinatario d,
       contacto c,
       usuario u,
       usuario r
 where 
       r.usuario = m.usuario
   and m.idmensaje = d.idmensaje
   and m.usuario = d.usuario
   and c.conseccontacto = d.conseccontacto
   and u.usuario = c.usuario_1
   and m.IDMENSAJE like :idMensaje
 order by d.idtipocopia`,
    [idMensaje]
  );
  if (resMensaje !== null) {
    let destinatariosCC = [];
    let destinatariosCCO = [];
    resMensaje.forEach((reg) => {
      if (reg[5] === "CO") destinatariosCC.push(reg[4]);
      else if (reg[5] === "COO") destinatariosCCO.push(reg[4]);
    });
    return {
      idMensaje: resMensaje[0][0],
      remitente: resMensaje[0][1],
      asunto: resMensaje[0][2],
      cuerpoMensaje: resMensaje[0][3],
      destinatariosCC: destinatariosCC,
      destinatariosCCO: destinatariosCCO,
    };
  }
}

export {
  actualizarMensaje,
  crearMensaje,
  formatearMensaje,
  obtenerMensajePorId,
  obtenerTodosLosMensajes,
  obtenerMensajesPorUsuarioYCategoria,
  obtenerRecibidosDeUsuario,
  obtenerEnviadosPorUsuario,
  obtenerBorradoresDeUsuario,
  obtenerInfoCompleta,
  agregarMensaje,
};
