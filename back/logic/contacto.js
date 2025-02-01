import { peticion } from "../services/database.js";

/**
 * Formatear los datos del contacto
 * @param {Array} contacto - Arreglo con los datos del contacto
 * @returns Objeto con los datos del contacto
 */
const formatearContacto = (contacto) =>
  contacto.length === 5
    ? {
        consecContacto: contacto[0],
        nombreContacto: contacto[1],
        correoContacto: contacto[2],
        usuario: contacto[3],
        usuario_1: contacto[4],
      }
    : {
        nombreContacto: contacto[0],
        correoContacto: contacto[1],
        usuario: contacto[2],
        usuario_1: contacto[3],
      };

async function obtenerTodosLosContactos() {
  return await peticion("select * FROM contacto", []);
}

async function obtenerContactoPorId(contactoId) {
  return (
    await peticion(
      "select * FROM contacto WHERE conseccontacto = :contactoId",
      [contactoId]
    )
  )[0];
}

/**
 * Crear un contacto
 * @param {Array} contacto - Array con los datos del contacto
 * @returns contacto creado
 */
async function crearContacto(contacto) {
  return await peticion(
    `INSERT INTO Contacto (conseccontacto, nombrecontacto, correocontacto, usuario, usuario_1) VALUES 
    (:conseccontacto, :nombrecontacto, :correocontacto, :usuario, :usuario_1)`,
    contacto
  );
}
/**
 * Actualizar el contacto
 * @param {Array} valoresContacto - Arreglo con los valores del contacto a actualizar
 * @returns Resultado de la petición
 */
async function actualizarContacto(valoresContacto) {
  // ignorar primer posicion del arreglo valores_contactos y guardarlo en una nueva variable llamada id
  const id = valoresContacto.shift();
  return await peticion(
    `UPDATE USUARIO SET nombrecontacto = :nombrecontacto, correocontacto = :correocontacto, usuario = :usuario, usuario_1 = :usuario_1 WHERE conseccontacto = :conseccontacto`,
    [...valoresContacto, id]
  );
}

async function obtenerContactosPorUsuario(usuario) {
  return (
    await peticion("select * FROM contacto WHERE usuario = :usuario", [usuario])
  );
}

export {
  actualizarContacto,
  crearContacto,
  formatearContacto,
  obtenerContactoPorId,
  obtenerTodosLosContactos,
  obtenerContactosPorUsuario,
};
