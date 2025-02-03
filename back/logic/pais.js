import { peticion } from "../services/database.js";

/**
 * Formatear los datos del Pais
 * @param {Array} Pais - Arreglo con los datos del Pais
 * @returns Objeto con los datos del Pais
 */
const formatearPais = (Pais) =>
  Pais.length === 2
    ? {
        idPais: Pais[0],
        nomPais: Pais[1],
        dominio: Pais[2]
      }
    : {
        nomPais: Pais[0],
        dominio: Pais[1]
      };

async function obtenerTodosLosPaises() {
  return await peticion("select * FROM Pais", []);
}

async function obtenerPaisPorId(id) {
  return (
    await peticion(
      "select * FROM Pais WHERE IDPais = :idPais",
      [id]
    )
  )[0];
}

/**
 * Crear un Pais
 * @param {Array} Pais - Array con los datos del Pais
 * @returns Pais creado
 */
async function crearPais(Pais) {
  return await peticion(
    `INSERT INTO Pais (idPais, nomPais, dominio) 
    VALUES (:idPais, :descpPais, :dominio)`,
    Pais
  );
}
/**
 * Actualizar el Pais
 * @param {Array} valoresPais - Arreglo con los valores del Pais a actualizar
 * @returns Resultado de la petición
 */
async function actualizarPais(valoresPais) {
  // ignorar primer posicion del arreglo valores_Paiss y guardarlo en una nueva variable llamada id
  const id = valoresPais.shift();
  return await peticion(
    `UPDATE Pais SET nomPais = :nomPais, dominio = :dominio  WHERE idPais = :idPais`,
    [...valoresPais, id]
  );
}

export {
  actualizarPais,
  crearPais,
  formatearPais,
  obtenerPaisPorId,
  obtenerTodosLosPaises,
};
