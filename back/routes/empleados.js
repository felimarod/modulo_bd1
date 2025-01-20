import { Router } from "express";
import {
  obtenerEmpleadoPorId,
  obtenerTodosLosEmpleados,
  formatearEmpleado,
  actualizarEmpleado,
  crearEmpleado,
  verificarEmpleado,
} from "../logic/empleados.js";

var router = Router();

/**
 * @openapi
 * tags:
 *   - name: empleados
 *     description: Operaciones relacionadas con empleados
 * /empleados/:
 *   get:
 *     tags:
 *       - empleados
 *     description: Obtener todos los empleados
 *     responses:
 *       200:
 *         description: Retorna todos los empleados.
 */
router.get("/", async (req, res, next) => {
  const resDB = await obtenerTodosLosEmpleados();
  let resJSON = resDB.map((empleado) => formatearEmpleado(empleado));
  res.send(resJSON);
});

/**
 * @openapi
 * /empleados/{id}:
 *   get:
 *     tags:
 *       - empleados
 *     description: Obtener empleado por id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Retorna el empleado.
 *       404:
 *         description: No se ha encontrado el empleado.
 */
router.get("/:id", async (req, res, next) => {
  try {
    const resDB = await obtenerEmpleadoPorId(req.params.id);
    res.status(200).send(formatearEmpleado(resDB));
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /empleados/verificar/:
 *  put:
 *   tags:
 *    - empleados
 *   description: Verificar existencia de usuario
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        last_name:
 *         type: string
 *        first_name:
 *         type: string
 *        user_id:
 *         type: string
 *   responses:
 *     200:
 *       description: Retorna el empleado actualizado.
 *     404:
 *       description: No se ha encontrado el empleado.
 *     500:
 *       description: Error en la base de datos.
 */
router.put("/verificar/", async (req, res, next) => {
  try {
    const resDB = await verificarEmpleado(req.body);
    res.status(200).send(formatearEmpleado(resDB));
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /empleados/{id}:
 *  put:
 *   tags:
 *    - empleados
 *   description: Actualizar empleado
 *   parameters:
 *   - in: path
 *   name: id
 *   required: true
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        last_name:
 *         type: string
 *        first_name:
 *         type: string
 *        user_id:
 *         type: string
 *        start_date:
 *         type: string
 *        comments:
 *         type: string
 *        manager_id:
 *         type: number
 *        title:
 *         type: string
 *        region_id:
 *         type: number
 *        dept_id:
 *         type: number
 *        salary:
 *         type: number
 *        commission_pct:
 *         type: number
 *   responses:
 *     200:
 *       description: Retorna el empleado actualizado.
 *     404:
 *       description: No se ha encontrado el empleado.
 *     500:
 *       description: Error en la base de datos.
 */
router.put("/:id", async (req, res, next) => {
  try {
    const empleadoFormateado = formatearEmpleado(
      Object.values({ id: req.params.id, ...req.body })
    );
    await actualizarEmpleado(Object.values(empleadoFormateado));
    res.status(200).send(empleadoFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /empleados/:
 *  post:
 *   tags:
 *    - empleados
 *   description: Crear empleado
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        last_name:
 *         type: string
 *        first_name:
 *         type: string
 *        user_id:
 *         type: string
 *        start_date:
 *         type: string
 *        comments:
 *         type: string
 *        manager_id:
 *         type: number
 *        title:
 *         type: string
 *        region_id:
 *         type: number
 *        dept_id:
 *         type: number
 *        salary:
 *         type: number
 *        commission_pct:
 *         type: number
 *   responses:
 *     200:
 *       description: Retorna el empleado actualizado.
 *     404:
 *       description: No se ha encontrado el empleado.
 *     500:
 *       description: Error en la base de datos.
 */
router.post("/", async (req, res, next) => {
  try {
    const empleadoFormateado = formatearEmpleado(Object.values(req.body));
    const res = await crearEmpleado(Object.values(empleadoFormateado));
    res.status(200).send(empleadoFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

export default router;
