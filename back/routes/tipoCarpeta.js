import { Router } from "express";
import {
  obtenerTipoCarpetaPorId,
  obtenerTodosLosTipoCarpeta,
  formatearTipoCarpeta,
  actualizarTipoCarpeta,
  crearTipoCarpeta,
} from "../logic/tipoCarpeta.js";

var router = Router();

/**
 * @openapi
 * tags:
 *   - name: TipoCarpeta
 *     description: Operaciones relacionadas con TipoCarpeta
 * /tipoCarpeta/:
 *   get:
 *     tags:
 *       - TipoCarpeta
 *     description: Obtener todos los TipoCarpeta
 *     responses:
 *       200:
 *         description: Retorna todos los TipoCarpetas.
 */
router.get("/", async (req, res, next) => {
  const resDB = await obtenerTodosLosTipoCarpeta();
  let resJSON = resDB.map((tipoCarpeta) => formatearTipoCarpeta(tipoCarpeta));
  res.send(resJSON);
});

/**
 * @openapi
 * /tipoCarpeta/{id}:
 *   get:
 *     tags:
 *       - TipoCarpeta
 *     description: Obtener TipoCarpeta por id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Retorna el TipoCarpeta.
 *       404:
 *         description: No se ha encontrado el TipoCarpeta.
 */
router.get("/:id", async (req, res, next) => {
  try {
    const resDB = await obtenerTipoCarpetaPorId(req.params.id);
    res.status(200).send(formatearTipoCarpeta(resDB));
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /tipoCarpeta/{id}:
 *  put:
 *   tags:
 *    - TipoCarpeta
 *   description: Actualizar TipoCarpeta
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
 *        descTipoCarpeta:
 *         type: string
 *        
 *   responses:
 *     200:
 *       description: Retorna el TipoCarpeta actualizado.
 *     404:
 *       description: No se ha encontrado el TipoCarpeta.
 *     500:
 *       description: Error en la base de datos.
 */
router.put("/:id", async (req, res, next) => {
  try {
    const TipoCarpetaFormateado = formatearTipoCarpeta(
      Object.values({ id: req.params.id, ...req.body })
    );
    await actualizarTipoCarpeta(Object.values(TipoCarpetaFormateado));
    res.status(200).send(TipoCarpetaFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /tipoCarpeta/:
 *  post:
 *   tags:
 *    - TipoCarpeta
 *   description: Crear TipoCarpeta
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        idTipoCarpeta:
 *         type: string
 *        descTipoCarpeta:
 *         type: string
 *   responses:
 *     200:
 *       description: Retorna el TipoCarpeta actualizado.
 *     404:
 *       description: No se ha encontrado el TipoCarpeta.
 *     500:
 *       description: Error en la base de datos.
 */
router.post("/", async (req, res, next) => {
  try {
    const TipoCarpetaFormateado = formatearTipoCarpeta(Object.values(req.body));
    const res = await crearTipoCarpeta(Object.values(TipoCarpetaFormateado));
    res.status(200).send(TipoCarpetaFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

export default router;
