import { json, Router } from "express";
import {
  obtenerDestinatarioPorId,
  obtenerTodasLasDestinatarios,
  formatearDestinatario,
  actualizarDestinatario,
  crearDestinatario,
} from "../logic/destinatario.js";

var router = Router();

/**
 * @openapi
 * tags:
 *   - name: Destinatario
 *     description: Operaciones relacionadas con Destinatario
 * /Destinatario/:
 *   get:
 *     tags:
 *       - Destinatario
 *     description: Obtener todas las Destinatario
 *     responses:
 *       200:
 *         description: Retorna todas las Destinatarios.
 */
router.get("/", async (req, res, next) => {
  const resDB = await obtenerTodasLasDestinatarios();
  let resJSON = resDB.map((Destinatario) => formatearDestinatario(Destinatario));
  res.send(resJSON);
});

/**
 * @openapi
 * /Destinatario/{id}:
 *   get:
 *     tags:
 *       - Destinatario
 *     description: Obtener Destinatario por id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Retorna el Destinatario.
 *       404:
 *         description: No se ha encontrado el Destinatario.
 */
router.get("/:id", async (req, res, next) => {
  try {
    const resDB = await obtenerDestinatarioPorId(req.params.id);
    res.status(200).send(formatearDestinatario(resDB));
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /Destinatario/{id}:
 *  put:
 *   tags:
 *    - Destinatario
 *   description: Actualizar Destinatario
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
 *        idMensaje:
 *         type: string
 *        usuario:
 *         type: string
 *        consecContacto:
 *         type: string
 *        idTipoCopia:
 *         type: string
 *        idPais:
 *         type: string
 *
 *   responses:
 *     200:
 *       description: Retorna el Destinatario actualizado.
 *     404:
 *       description: No se ha encontrado el Destinatario.
 *     500:
 *       description: Error en la base de datos.
 */
router.put("/:id", async (req, res, next) => {
  try {
    const DestinatarioFormateado = formatearDestinatario(
      Object.values({ id: req.params.id, ...req.body })
    );
    await actualizarDestinatario(Object.values(DestinatarioFormateado));
    console.log(resDB);
    res.status(200).send(DestinatarioFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /Destinatario/:
 *  post:
 *   tags:
 *    - Destinatario
 *   description: Crear Destinatario
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        consecDestinatario:
 *         type: string
 *        idMensaje:
 *         type: string
 *        usuario:
 *         type: string
 *        consecContacto:
 *         type: string
 *        idTipoCopia:
 *         type: string
 *        idPais:
 *         type: string
 *   responses:
 *     200:
 *       description: Retorna el Destinatario actualizado.
 *     404:
 *       description: No se ha encontrado el Destinatario.
 *     500:
 *       description: Error en la base de datos.
 */
router.post("/", async (req, res, next) => {
  try {
    const DestinatarioFormateado = formatearDestinatario(Object.values(req.body));
    const res = await crearDestinatario(Object.values(DestinatarioFormateado));
    res.status(200).send(DestinatarioFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

export default router;
