import { peticion } from "./database.js";

/**
 * Formatear los datos del usuario
 * @param {Array} usuario - Arreglo con los datos del usuario
 * @returns Objeto con los datos del usuario
 */
const formatearUsuario = (usuario) =>
  usuario.length === 9
    ? {
        usuario_: usuario[0],
        nombre: usuario[1],
        apellido: usuario[2],
        fechaNacimiento: new Date(usuario[3]),
        fechaCreacion: new Date(usuario[4]),
        correoAlterno: usuario[5],
        celular: usuario[6],
        idEstado: usuario[7],
        idPais: usuario[8],
      }     
    : {
        nombre: usuario[0],
        apellido: usuario[1],
        fechaNacimiento: new Date(usuario[2]),
        fechaCreacion: new Date(usuario[3]),
        correoAlterno: usuario[4],
        celular: usuario[5],
        idEstado: usuario[6],
        idPais: usuario[7]
      };

async function obtenerTodosLosUsuarios() {
  return await peticion("select * FROM USUARIO", []);
}

async function obtenerUsuarioPorId(USUARIO) {
  return (await peticion("select * FROM USUARIO WHERE USUARIO = :USUARIO", [USUARIO]))[0];
}

/**
 * Crear un usuario
 * @param {Array} usuario - Array con los datos del usuario
 * @returns usuario creado
 */
async function crearUsuario(usuario) {
  return await peticion(
    `INSERT INTO Usuario (usuario,nombre,apellido,fechanacimiento,fechacreacion,correoalterno,celular,idestado,idpais) VALUES 
    (:usuario,:nombre,:apellido,:fechanacimiento,:fechacreacion,:correoalterno,:celular,:idestado,:idpais)`,
    usuario
  );
}
/**
 * Actualizar el usuario
 * @param {Array} valores_usuario - Arreglo con los valores del usuario a actualizar
 * @returns Resultado de la petición
 */
async function actualizarUsuario(valores_usuario) {
  // ignorar primer posicion del arreglo valores_usuarios y guardarlo en una nueva variable llamada id
  const id = valores_usuario.shift();
  return await peticion(
    `UPDATE USUARIO SET nombre = :nombre, apellido = :apellido, fechanacimiento = :fechanacimiento, fechacreacion = :fechacreacion, correoalterno = :correoalterno, celular = :celular, idestado = :idestado, idpais = :idpais WHERE usuario = :usuario`,
    [...valores_usuario, id]
  );
}

async function verificarUsuario({ nombre, apellido, usuario }) {
  const usuarios = await peticion(
    `select * FROM USUARIO WHERE nombre = :nombre and apellido = :apellido and usuario = :usuario`,
    [nombre, apellido, usuario]
  );
  return usuarios[0];
}

export {
  actualizarUsuario,
  crearUsuario,
  formatearUsuario,
  obtenerUsuarioPorId,
  obtenerTodosLosUsuarios,
  verificarUsuario,
};
