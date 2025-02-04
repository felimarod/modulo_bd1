import { peticion } from "../services/database.js";

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
async function crearMensaje(Mensaje) {
  return await peticion(
    `INSERT INTO Mensaje (idMensaje, asunto, cuerpoMensaje, idTipoCarpeta, fechaAccion, horaAccion, usuario, idCategoria) 
    VALUES (:idMensaje, :asunto, :cuerpoMensaje, :idTipoCarpeta,TO_DATE(:fechaAccion,'DD/MM/YYYY'), TO_TIMESTAMP(:horaAccion,'HH24:MI:SS'), :usuario, :idCategoria)`,
    Mensaje
  );
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
            to_char(m.fechaaccion, 'DD/MM/YY')
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
    `select m.idmensaje "idMensaje",
       m.asunto "asunto",
       m.CUERPOMENSAJE "cuerpoMensaje",
       u.nombre
       || ' '
       || u.apellido "destinatario"
  from mensaje m,
       destinatario d,
       contacto c,
       usuario u
 where m.idmensaje = d.idmensaje
   and m.usuario = d.usuario
   and c.conseccontacto = d.conseccontacto
   and u.usuario = c.usuario_1
   and m.IDMENSAJE like :idMensaje
 order by d.idtipocopia`,
    [idMensaje]
  );
  if (resMensaje !== null) {
    console.log(resMensaje);
    let destinatarios = [];

    resMensaje.forEach((reg) => {
      destinatarios.push(reg[3]);
    });
    return {
      idMensaje: resMensaje[0][0],
      asunto: resMensaje[0][1],
      cuerpoMensaje: resMensaje[0][2],
      destinatariosCC: destinatarios,
      destinatariosCCO: "",
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
};
