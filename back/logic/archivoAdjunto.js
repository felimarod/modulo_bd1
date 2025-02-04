import { peticion } from "../services/database.js";

/**
 * Formatear los datos del ArchivoAdjunto
 * @param {Array} ArchivoAdjunto - Arreglo con los datos del ArchivoAdjunto
 * @returns Objeto con los datos del ArchivoAdjunto
 */
const formatearArchivoAdjunto = (ArchivoAdjunto) =>
  ArchivoAdjunto.length === 5
    ? {
        consecArchivo: ArchivoAdjunto[0],
        nomArchivo: ArchivoAdjunto[1],
        usuario: ArchivoAdjunto[2],
        idMensaje: ArchivoAdjunto[3],
        idTipoArchivo: ArchivoAdjunto[4],
      }
    : {
        nomArchivo: ArchivoAdjunto[0],
        usuario: ArchivoAdjunto[1],
        idMensaje: ArchivoAdjunto[2],
        idTipoArchivo: ArchivoAdjunto[3],
      };

async function obtenerTodosLosArchivosAdjuntos() {
  return await peticion("select * FROM ArchivoAdjunto", []);
}


async function obtenerArchivoAdjuntoPorId(id) {
    return (
      await peticion(
        "select * FROM ArchivoAdjunto WHERE concecArchivo = :concecArchivo",
        [id]
      )
    )[0];
}
  
/**
 * Crear un ArchivoAdjunto
 * @param {Array} ArchivoAdjunto - Array con los datos del ArchivoAdjunto
 * @returns ArchivoAdjunto creado
 */
async function crearArchivoAdjunto(ArchivoAdjunto) {
    return await peticion(
      `INSERT INTO ArchivoAdjunto (concecArchivo, nomArchivo, usuario, idMensaje, idTipoArchivo) 
      VALUES (:concecArchivo, :nomArchivo, :usuario, :idMensaje, :idTipoArchivo)`,
      ArchivoAdjunto
    );
}
  
/**
 * Actualizar el ArchivoAdjunto
 * @param {Array} valoresArchivoAdjunto - Arreglo con los valores del ArchivoAdjunto a actualizar
 * @returns Resultado de la petición
 */
async function actualizarArchivoAdjunto(valoresArchivoAdjunto) {
    // ignorar primer posicion del arreglo valores_ArchivoADjunto y guardarlo en una nueva variable llamada id
    const id = valoresArchivoADjunto.shift();
    return await peticion(
      `UPDATE ArchivoAdjunto SET nomArchivo = :nomArchivo WHERE concecArchivo = :concecArchivo`,
      [...valoresArchivoAdjunto, id]
    );
}

  export {
    actualizarArchivoAdjunto,
    crearArchivoAdjunto,
    formatearArchivoAdjunto,
    obtenerArchivoAdjuntoPorId,
    obtenerTodosLosArchivosAdjuntos,
};