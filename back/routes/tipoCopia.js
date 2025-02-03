import { Router } from "express";
import {
  obtenerTipoCopiaPorId,
  obtenerTodosLosTipoCopia,
  formatearTipoCopia,
  actualizarTipoCopia,
  crearTipoCopia,
} from "../logic/tipoCopia.js";

var router = Router();

/**
 * @openapi
 * tags:
 *   - name: TipoCopia
 *     description: Operaciones relacionadas con TipoCopia
 * /tipoCopia/:
 *   get:
 *     tags:
 *       - TipoCopia
 *     description: Obtener todos los TipoCopia
 *     responses:
 *       200:
 *         description: Retorna todos los TipoCopias.
 */
router.get("/", async (req, res, next) => {
  const resDB = await obtenerTodosLosTipoCopia();
  let resJSON = resDB.map((TipoCopia) => formatearTipoCopia(TipoCopia));
  res.send(resJSON);
});

/**
 * @openapi
 * /tipoCopia/{id}:
 *   get:
 *     tags:
 *       - TipoCopia
 *     description: Obtener TipoCopia por id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Retorna el TipoCopia.
 *       404:
 *         description: No se ha encontrado el TipoCopia.
 */
router.get("/:id", async (req, res, next) => {
  try {
    const resDB = await obtenerTipoCopiaPorId(req.params.id);
    res.status(200).send(formatearTipoCopia(resDB));
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /tipoCopia/{id}:
 *  put:
 *   tags:
 *    - TipoCopia
 *   description: Actualizar TipoCopia
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
 *        idTipoCopia:
 *         type: string
 *        descTipoCopia:
 *         type: string
 *        
 *   responses:
 *     200:
 *       description: Retorna el TipoCopia actualizado.
 *     404:
 *       description: No se ha encontrado el TipoCopia.
 *     500:
 *       description: Error en la base de datos.
 */
router.put("/:id", async (req, res, next) => {
  try {
    const TipoCopiaFormateado = formatearTipoCopia(
      Object.values({ id: req.params.id, ...req.body })
    );
    await actualizarTipoCopia(Object.values(TipoCopiaFormateado));
    res.status(200).send(TipoCopiaFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /tipoCopia/:
 *  post:
 *   tags:
 *    - TipoCopia
 *   description: Crear TipoCopia
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        idTipoCopia:
 *         type: string
 *        descTipoCopia:
 *         type: string
 *   responses:
 *     200:
 *       description: Retorna el TipoCopia actualizado.
 *     404:
 *       description: No se ha encontrado el TipoCopia.
 *     500:
 *       description: Error en la base de datos.
 */
router.post("/", async (req, res, next) => {
  try {
    const TipoCopiaFormateado = formatearTipoCopia(Object.values(req.body));
    const res = await crearTipoCopia(Object.values(TipoCopiaFormateado));
    res.status(200).send(TipoCopiaFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

export default router;
