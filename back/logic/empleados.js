import { peticion } from "./database.js";

const formatearEmpleado = (empleado) =>
  empleado.length === 12
    ? {
        id: empleado[0],
        last_name: empleado[1],
        first_name: empleado[2],
        user_id: empleado[3],
        start_date: new Date(empleado[4]),
        comments: empleado[5],
        manager_id: empleado[6],
        title: empleado[7],
        region_id: empleado[8],
        dept_id: empleado[9],
        salary: empleado[10],
        commission_pct: empleado[11],
      }
    : {
        last_name: empleado[0],
        first_name: empleado[1],
        user_id: empleado[2],
        start_date: new Date(empleado[3]),
        comments: empleado[4],
        manager_id: empleado[5],
        title: empleado[6],
        region_id: empleado[7],
        dept_id: empleado[8],
        salary: empleado[9],
        commission_pct: empleado[10],
      };

async function obtenerTodosLosEmpleados() {
  return await peticion("select * FROM s_emp", []);
}

async function obtenerEmpleadoPorId(id) {
  return (await peticion("select * FROM s_emp WHERE ID = :id", [id]))[0];
}

/**
 * Crear un empleado
 * @param {Object} empleado - Objeto con los datos del empleado
 * @returns Empleado creado
 */
async function crearEmpleado(empleado) {
  return await peticion(
    `INSERT INTO s_emp (last_name, first_name, userid, start_date, comments, manager_id, title, region_id, dept_id, salary, commission_pct) 
    VALUES ( :last_name, :first_name, :user_id, :start_date, :comments, :manager_id, :title, :region_id, :dept_id, :salary, :commission_pct)`,
    empleado
  );
}
/**
 * Actualizar el empleado
 * @param {Array} valores_empleado - Arreglo con los valores del empleado a actualizar
 * @returns Resultado de la petición
 */
async function actualizarEmpleado(valores_empleado) {
  // ignorar primer posicion del arreglo valores_empleados y guardarlo en una nueva variable llamada id
  const id = valores_empleado.shift();
  return await peticion(
    `UPDATE s_emp SET last_name = :last_name, first_name = :first_name, userid = :userid, start_date = :start_date, comments = :comments, manager_id = :manager_id, title = :title, region_id = :region_id, dept_id = :dept_id, salary = :salary, commission_pct = :commission_pct WHERE id = :id`,
    [...valores_empleado, id]
  );
}

export {
  actualizarEmpleado,
  crearEmpleado,
  formatearEmpleado,
  obtenerEmpleadoPorId,
  obtenerTodosLosEmpleados,
};
