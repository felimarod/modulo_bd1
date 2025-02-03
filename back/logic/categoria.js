import { peticion } from "../services/database.js";

/**
 * Formatear los datos del Categoria
 * @param {Array} Categoria - Arreglo con los datos del Categoria
 * @returns Objeto con los datos del Categoria
 */
const formatearCategoria = (Categoria) =>
  Categoria.length === 2
    ? {
        idCategoria: Categoria[0],
        desCategoria: Categoria[1],
      }
    : {
        desCategoria: Categoria[0],
      };

async function obtenerTodasLasCategorias() {
  return await peticion("select * FROM Categoria", []);
}

async function obtenerCategoriaPorId(id) {
  return (
    await peticion(
      "select * FROM Categoria WHERE IDCategoria = :idCategoria",
      [id]
    )
  )[0];
}

/**
 * Crear un Categoria
 * @param {Array} Categoria - Array con los datos de la Categoria
 * @returns Categoria creado
 */
async function crearCategoria(Categoria) {
  return await peticion(
    `INSERT INTO Categoria (idCategoria, desCategoria) 
    VALUES (:idCategoria, :desCategoria)`,
    Categoria
  );
}
/**
 * Actualizar el Categoria
 * @param {Array} valoresCategoria - Arreglo con los valores del Categoria a actualizar
 * @returns Resultado de la petición
 */
async function actualizarCategoria(valoresCategoria) {
  // ignorar primer posicion del arreglo valores_Categorias y guardarlo en una nueva variable llamada id
  const id = valoresCategoria.shift();
  return await peticion(
    `UPDATE Categoria SET desCategoria = :desCategoria WHERE idCategoria = :idCategoria`,
    [...valoresCategoria, id]
  );
}

export {
  actualizarCategoria,
  crearCategoria,
  formatearCategoria,
  obtenerCategoriaPorId,
  obtenerTodasLasCategorias,
};
