import { peticion } from "../services/database.js";

/**
 * Formatear los datos del tipoCarpeta
 * @param {Array} tipoCarpeta - Arreglo con los datos del tipoCarpeta
 * @returns Objeto con los datos del tipoCarpeta
 */
const formateartipoCarpeta = (tipoCarpeta) =>
  tipoCarpeta.length === 2
    ? {
        idTipoCarpeta: tipoCarpeta[0],
        descTipoCarpeta: tipoCarpeta[1],
      }
    : {
        descTipoCarpeta: tipoCarpeta[0],
      };

async function obtenerTodosLostipoCarpetas() {
  return await peticion("select * FROM tipoCarpeta", []);
}

async function obtenertipoCarpetaPorId(id) {
  return (
    await peticion(
      "select * FROM tipocarpeta WHERE IDtipocarpeta = :idtipocarpeta",
      [id]
    )
  )[0];
}

/**
 * Crear un tipoCarpeta
 * @param {Array} tipoCarpeta - Array con los datos del tipoCarpeta
 * @returns tipoCarpeta creado
 */
async function creartipoCarpeta(tipoCarpeta) {
  return await peticion(
    `INSERT INTO tipoCarpeta (idTipoCarpeta, descpTipoCarpeta) 
    VALUES (:idTipoCarpeta, :descpTipoCarpeta)`,
    tipoCarpeta
  );
}
/**
 * Actualizar el tipoCarpeta
 * @param {Array} valoresTipoCarpeta - Arreglo con los valores del tipoCarpeta a actualizar
 * @returns Resultado de la petición
 */
async function actualizartipoCarpeta(valoresTipoCarpeta) {
  // ignorar primer posicion del arreglo valores_tipoCarpetas y guardarlo en una nueva variable llamada id
  const id = valoresTipoCarpeta.shift();
  return await peticion(
    `UPDATE tipocarpeta SET idtipocarpeta= :idTipoCarpeta, descTipoCarpeta = :descTipoCarpeta WHERE idtipocarpeta = :idtipocarpeta`,
    [...valoresTipoCarpeta, id]
  );
}

export {
  actualizartipoCarpeta as actualizarTipoCarpeta,
  creartipoCarpeta as crearTipoCarpeta,
  formateartipoCarpeta as formatearTipoCarpeta,
  obtenertipoCarpetaPorId as obtenerTipoCarpetaPorId,
  obtenerTodosLostipoCarpetas as obtenerTodosLosTipoCarpeta,
};
