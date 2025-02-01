import { peticion } from "../services/database.js";

/**
 * Formatear los datos del Estado
 * @param {Array} Estado - Arreglo con los datos del Estado 
 * @returns Objeto con los datos del Estado
 */
const formatearEstado = (Estado) =>
  Estado.length === 2
    ? {
        idEstado: Estado[0],
        nombreEstado: Estado[1],
      }
    : {
        nombreEstado: Estado[0],
      };

async function obtenerTodosLosEstados() {
  return await peticion("select * FROM ESTADO", []);
}

async function obtenerEstadoPorId(EstadoId) {
  return (
    await peticion(
      "select * FROM Estado WHERE idEstado = :EstadoId",
      [EstadoId]
    )
  )[0];
}

/**
 * Crear un Estado
 * @param {Array} Estado - Array con los datos del Estado
 * @returns Estado creado
 */
async function crearEstado(Estado) {
  return await peticion(
    `INSERT INTO Estado (idEstado, nombreEstado) VALUES 
    (:idEstado, :nombreEstado)`,
    Estado
  );
}
/**
 * Actualizar el Estado
 * @param {Array} valoresEstado - Arreglo con los valores del Estado a actualizar
 * @returns Resultado de la petición
 */
async function actualizarEstado(valoresEstado) {
  // ignorar primer posicion del arreglo valores_Estados y guardarlo en una nueva variable llamada id
  const id = valoresEstado.shift();
  return await peticion(
    `UPDATE ESTADO SET nombreEstado = :nombreEstado WHERE idEstado = :idEstado`,
    [...valoresEstado, id]
  );
}

async function obtenerEstadosPorNombre(usuario) {
  return (
    await peticion("select * FROM ESTADO WHERE nombreEstado = :nombreEstado", [estado])
  );
}

export {
  actualizarEstado,
  crearEstado,
  formatearEstado,
  obtenerEstadoPorId,
  obtenerTodosLosEstados,
  obtenerEstadosPorNombre,
};
