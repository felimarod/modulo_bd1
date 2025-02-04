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
    await peticion(
      "select * FROM MENSAJE WHERE idMensaje = :idMensaje",
      [id]
    )
  )[0];
}

/**
 * Crear un Mensaje
 * @param {Array} Mensaje - Array con los datos de la Mensaje
 * @returns Mensaje creado
 */
async function crearMensaje(Mensaje) {
  console.log(Mensaje);
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

export {
  actualizarMensaje,
  crearMensaje,
  formatearMensaje,
  obtenerMensajePorId,
  obtenerTodosLosMensajes,
};
