import { peticion } from "../services/database.js";

/**
 * Formatear los datos del tipoArchivo
 * @param {Array} tipoArchivo - Arreglo con los datos del tipoArchivo
 * @returns Objeto con los datos del tipoArchivo
 */
const formatearTipoArchivo = (tipoArchivo) =>
  tipoArchivo.length === 2
    ? {
        idTipoArchivo: tipoArchivo[0],
        descTipoArchivo: tipoArchivo[1],
      }
    : {
        descTipoArchivo: tipoArchivo[0],
      };

async function obtenerTodosLosTipoArchivos() {
  return await peticion("select * FROM tipoArchivo", []);
}

async function obtenerTipoArchivoPorId(id) {
  return (
    await peticion(
      "select * FROM tipoArchivo WHERE IDtipoArchivo = :idtipoArchivo",
      [id]
    )
  )[0];
}

/**
 * Crear un tipoArchivo
 * @param {Array} tipoArchivo - Array con los datos del tipoArchivo
 * @returns tipoArchivo creado
 */
async function crearTipoArchivo(tipoArchivo) {
  return await peticion(
    `INSERT INTO tipoArchivo (idTipoArchivo, descTipoArchivo) 
    VALUES (:idTipoArchivo, :descTipoArchivo)`,
    tipoArchivo
  );
}
/**
 * Actualizar el tipoArchivo
 * @param {Array} valorestipoArchivo - Arreglo con los valores del tipoArchivo a actualizar
 * @returns Resultado de la petición
 */
async function actualizarTipoArchivo(valorestipoArchivo) {
  // ignorar primer posicion del arreglo valores_tipoArchivos y guardarlo en una nueva variable llamada id
  const id = valorestipoArchivo.shift();
  return await peticion(
    `UPDATE tipoArchivo SET idTipoArchivo= :idTipoArchivo, descTipoArchivo = :descTipoArchivo WHERE idTipoArchivo = :idTipoArchivo`,
    [...valorestipoArchivo, id]
  );
}

export {
  actualizarTipoArchivo,
  crearTipoArchivo,
  formatearTipoArchivo,
  obtenerTipoArchivoPorId,
  obtenerTodosLosTipoArchivos,
};
