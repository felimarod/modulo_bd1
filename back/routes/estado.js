import { Router } from "express";
import {
    actualizarEstado,
    crearEstado,
    formatearEstado,
    obtenerEstadoPorId,
    obtenerTodosLosEstados,
    obtenerEstadosPorNombre,
} from "../logic/estado.js";

var router = Router();

/**
 * @openapi
 * tags:
 *   - name: Estado
 *     description: Operaciones relacionadas con Estado
 * /estado/:
 *   get:
 *     tags:
 *       - Estado
 *     description: Obtener todos los Estados
 *     responses:
 *       200:
 *         description: Retorna todos los Estados.
 */
router.get("/", async (req, res, next) => {
  const resDB = await obtenerTodosLosEstados();
  let resJSON = resDB.map((Estado) => formatearEstado(Estado));
  res.send(resJSON);
});

/**
 * @openapi
 * /estado/{id}:
 *   get:
 *     tags:
 *       - Estado
 *     description: Obtener Estado por id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Retorna el Estado.
 *       404:
 *         description: No se ha encontrado el Estado.
 */
router.get("/:id", async (req, res, next) => {
  try {
    const resDB = await obtenerEstadoPorId(req.params.id);
    res.status(200).send(formatearEstado(resDB));
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /estado/{id}:
 *  put:
 *   tags:
 *    - Estado
 *   description: Actualizar Estado
 *   parameters:
 *   - in: path
 *     name: id
 *     required: true
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        idEstado:
 *         type: string
 *        nombreEstado:
 *         type: string
 *        
 *   responses:
 *     200:
 *       description: Retorna el Estado actualizado.
 *     404:
 *       description: No se ha encontrado el Estado.
 *     500:
 *       description: Error en la base de datos.
 */
router.put("/:id", async (req, res, next) => {  
  try {
    const EstadoFormateado = formatearEstado(
      Object.values({ id: req.params.id, ...req.body })
    );
    await actualizarEstado(Object.values(EstadoFormateado));
    res.status(200).send(EstadoFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /estado/:
 *  post:
 *   tags:
 *    - Estado
 *   description: Crear Estado
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        idEstado:
 *         type: string
 *        nombreEstado:
 *         type: string
 *   responses:
 *     200:
 *       description: Retorna el Estado actualizado.
 *     404:
 *       description: No se ha encontrado el Estado.
 *     500:
 *       description: Error en la base de datos.
 */
router.post("/", async (req, res, next) => {
  try {
    const EstadoFormateado = formatearEstado(Object.values(req.body));
    const res = await crearEstado(Object.values(EstadoFormateado));
    res.status(200).send(EstadoFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

export default router;
