import { peticion } from "../services/database.js";

/**
 * Formatear los datos del Destinatario
 * @param {Array} Destinatario - Arreglo con los datos del Destinatario
 * @returns Objeto con los datos del Destinatario
 */
const formatearDestinatario = (Destinatario) =>
  Destinatario.length === 6
    ? {
        consecDestinatario: Destinatario[0],
        idMensaje: Destinatario[1],
        usuario: Destinatario[2],
        consecContacto: Destinatario[3],
        idTipoCopia: Destinatario[4],
        idPais: Destinatario[5],
      }
    : {
        idMensaje: Destinatario[0],
        usuario: Destinatario[1],
        consecContacto: Destinatario[2],
        idTipoCopia: Destinatario[3],
        idPais: Destinatario[4],
      };

async function obtenerTodosLosDestinatarios() {
  return await peticion("select * FROM Destinatario", []);
}

async function obtenerDestinatarioPorId(id) {
  return (
    await peticion(
      "select * FROM Destinatario WHERE consecDestinatario = :consecDestinatario",
      [id]
    )
  )[0];
}

/**
 * Crear un Destinatario
 * @param {Array} Destinatario - Array con los datos de la Destinatario
 * @returns Destinatario creado
 */
async function crearDestinatario(Destinatario) {
  return await peticion(
    `INSERT INTO Destinatario (idMensaje,usuario,consecContacto,idTipoCopia,idPais) 
    VALUES (idMensaje,:usuario,:consecContacto,:idTipoCopia,:idPais)`,
    Destinatario
  );
}
/**
 * Actualizar el Destinatario
 * @param {Array} valoresDestinatario - Arreglo con los valores del Destinatario a actualizar
 * @returns Resultado de la petición
 */
async function actualizarDestinatario(valoresDestinatario) {
  // ignorar primer posicion del arreglo valores_Destinatarios y guardarlo en una nueva variable llamada id
  const id = valoresDestinatario.shift();
  return await peticion(
    `UPDATE Destinatario SET idMensaje = :idMensaje, usuario = :usuario, consecContacto = :consecContacto, idTipoCopia = :idTipoCopia, idPais = :idPais WHERE consecDestinatario = :consecDestinatario`,
    [...valoresDestinatario, id]
  );
}

export {
  actualizarDestinatario,
  crearDestinatario,
  formatearDestinatario,
  obtenerDestinatarioPorId,
  obtenerTodosLosDestinatarios,
};
