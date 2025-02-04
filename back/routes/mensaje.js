import { json, Router } from "express";
import {
  obtenerMensajePorId,
  obtenerTodosLosMensajes,
  formatearMensaje,
  actualizarMensaje,
  crearMensaje,
} from "../logic/mensaje.js";

var router = Router();

/**
 * @openapi
 * tags:
 *   - name: Mensaje
 *     description: Operaciones relacionadas con Mensaje
 * /mensaje/:
 *   get:
 *     tags:
 *       - Mensaje
 *     description: Obtener todas las Mensaje
 *     responses:
 *       200:
 *         description: Retorna todas las Mensajes.
 */
router.get("/", async (req, res, next) => {
  const resDB = await obtenerTodosLosMensajes();
  let resJSON = resDB.map((Mensaje) => formatearMensaje(Mensaje));
  res.send(resJSON);
});

/**
 * @openapi
 * /mensaje/{id}:
 *   get:
 *     tags:
 *       - Mensaje
 *     description: Obtener Mensaje por id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Retorna el Mensaje.
 *       404:
 *         description: No se ha encontrado el Mensaje.
 */
router.get("/:id", async (req, res, next) => {
  try {
    const resDB = await obtenerMensajePorId(req.params.id);
    res.status(200).send(formatearMensaje(resDB));
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /mensaje/{id}:
 *  put:
 *   tags:
 *    - Mensaje
 *   description: Actualizar Mensaje
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
 *        asunto:
 *         type: string
 *        cuerpoMensaje:
 *         type: string
 *        idTipoCarpeta:
 *         type: string
 *        fechaAccion:
 *         type: string
 *        horaAccion:
 *         type: string
 *        usuario:
 *         type: string
 *        idCategoria:
 *         type: string
 *
 *   responses:
 *     200:
 *       description: Retorna el Mensaje actualizado.
 *     404:
 *       description: No se ha encontrado el Mensaje.
 *     500:
 *       description: Error en la base de datos.
 */
router.put("/:id", async (req, res, next) => {
  try {
    const MensajeFormateado = formatearMensaje(
      Object.values({ id: req.params.id, ...req.body })
    );
    await actualizarMensaje(Object.values(MensajeFormateado));
    res.status(200).send(MensajeFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /mensaje/:
 *  post:
 *   tags:
 *    - Mensaje
 *   description: Crear Mensaje
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        idMensaje:
 *         type: string
 *        asunto:
 *         type: string
 *        cuerpoMensaje:
 *         type: string
 *        idTipoCarpeta:
 *         type: string
 *        fechaAccion:
 *         type: string
 *        horaAccion:
 *         type: string
 *        usuario:
 *         type: string
 *        idCategoria:
 *         type: string
 *   responses:
 *     200:
 *       description: Retorna el Mensaje actualizado.
 *     404:
 *       description: No se ha encontrado el Mensaje.
 *     500:
 *       description: Error en la base de datos.
 */
router.post("/", async (req, res, next) => {
  try {
    const MensajeFormateado = formatearMensaje(Object.values(req.body));
    await crearMensaje(Object.values(MensajeFormateado));
    res.status(202).send(MensajeFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /mensaje/{idUsuario}/categoria{idCategoria}:
 *   get:
 *     tags:
 *       - Mensaje
 *     description: Obtiene los mensajes recibidos por id
 *     parameters:
 *      - in: path
 *        name: idUsuario
 *        required: true
 *      - in: path
 *        name: idCategoria
 *        required: true
 *     responses:
 *       200:
 *         description: Retorna los Mensajes filtrados por Usuario y categoria.
 *       404:
 *         description: No se ha encontrado el Mensaje.
 */
router.get("/:idUsuario/:idCategoria", async (req, res, next) => {
  try {
    console.log(req.params.idUsuario, req.params.idCategoria);

    const resDB = await obtenerMensajePorId("E001");
    res.status(200).send(formatearMensaje(resDB));
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

export default router;
