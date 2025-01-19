import oracledb from "oracledb";
import environment from "../environment.js";

/**
 * Realiza una petición a la base de datos.
 * @param {string} sql - La sentencia SQL a ejecutar.
 * @param {Array} parameters - Los parámetros de la sentencia SQL.
 * @returns {Array} - El resultado de la petición.
 * @throws {Error} - Si ocurre un error al realizar la petición.
 * @async
 */
const peticion = async (sql, parameters) => {
  let conn;
  try {
    conn = await oracledb.getConnection(environment.config);
    const result = await conn.execute(sql, parameters);
    conn.commit();
    return result.rows ? result.rows : result;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  } finally {
    if (conn) {
      // conn assignment worked, need to close
      await conn.close();
    }
  }
};

export { peticion };
