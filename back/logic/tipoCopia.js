import { peticion } from "../services/database.js";

/**
 * Formatear los datos del TipoCopia
 * @param {Array} tipoCopia - Arreglo con los datos del TipoCopia
 * @returns Objeto con los datos del TipoCopia
 */
const formatearTipoCopia = (tipoCopia) =>
  tipoCopia.length === 2    
    ? {
        idTipoCopia: tipoCopia[0],
        descTipoCopia: tipoCopia[1],
      }
    : {
        descTipoCopia: tipoCopia[0],
      };

async function obtenerTodosLosTipoCopia() {
  return await peticion("select * FROM tipoCopia", []);
}

async function obtenerTipoCopiaPorId(id) {
  return (
    await peticion(
      "select * FROM TIPOCOPIA WHERE idTipoCopia = :idTipoCopia",
      [id]
    )
  )[0];
}

/**
 * Crear un TipoCopia
 * @param {Array} tipoCopia - Array con los datos del TipoCopia
 * @returns TipoCopia creado
 */
async function crearTipoCopia(tipoCopia) {
  return await peticion(
    `INSERT INTO TipoCopia (idTipoCopia, descTipoCopia) 
    VALUES (:idTipoCopia, :descTipoCopia)`,
    TipoCopia
  );
}
/**
 * Actualizar el TipoCopia
 * @param {Array} valoresTipoCopia - Arreglo con los valores del TipoCopia a actualizar
 * @returns Resultado de la petición
 */
async function actualizarTipoCopia(valoresTipoCopia) {
  // ignorar primer posicion del arreglo valores_TipoCopias y guardarlo en una nueva variable llamada id
  const id = valoresTipoCopia.shift();
  return await peticion(
    `UPDATE TipoCopia SET descTipoCopia = :descTipoCopia WHERE idTipoCopia = :idTipoCopia`,
    [...valoresTipoCopia, id]
  );
}

export {
  actualizarTipoCopia,
  crearTipoCopia,
  formatearTipoCopia,
  obtenerTipoCopiaPorId,
  obtenerTodosLosTipoCopia,
};
