import { Router } from "express";
import {
  obtenerTipoArchivoPorId,
  obtenerTodosLosTipoArchivos,
  formatearTipoArchivo,
  actualizarTipoArchivo,
  crearTipoArchivo,
} from "../logic/tipoArchivo.js";

var router = Router();

/**
 * @openapi
 * tags:
 *   - name: TipoArchivo
 *     description: Operaciones relacionadas con TipoArchivo
 * /tipoArchivo/:
 *   get:
 *     tags:
 *       - TipoArchivo
 *     description: Obtener todos los tipoArchivo
 *     responses:
 *       200:
 *         description: Retorna todos los tipoArchivos.
 */
router.get("/", async (req, res, next) => {
  const resDB = await obtenerTodosLosTipoArchivos();
  let resJSON = resDB.map((TipoArchivo) => formatearTipoArchivo(TipoArchivo));
  res.send(resJSON);
});

/**
 * @openapi
 * /tipoArchivo/{id}:
 *   get:
 *     tags:
 *       - TipoArchivo
 *     description: Obtener TipoArchivo por id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Retorna el TipoArchivo.
 *       404:
 *         description: No se ha encontrado el TipoArchivo.
 */
router.get("/:id", async (req, res, next) => {
  try {
    const resDB = await obtenerTipoArchivoPorId(req.params.id);
    res.status(200).send(formatearTipoArchivo(resDB));
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /tipoArchivo/{id}:
 *  put:
 *   tags:
 *    - TipoArchivo
 *   description: Actualizar TipoArchivo
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
 *        descTipoArchivo:
 *         type: string
 *        
 *   responses:
 *     200:
 *       description: Retorna el TipoArchivo actualizado.
 *     404:
 *       description: No se ha encontrado el TipoArchivo.
 *     500:
 *       description: Error en la base de datos.
 */
router.put("/:id", async (req, res, next) => {
  try {
    const TipoArchivoFormateado = formatearTipoArchivo(
      Object.values({ id: req.params.id, ...req.body })
    );
    await actualizarTipoArchivo(Object.values(TipoArchivoFormateado));
    res.status(200).send(TipoArchivoFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /tipoArchivo/:
 *  post:
 *   tags:
 *    - TipoArchivo
 *   description: Crear TipoArchivo
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        idTipoArchivo:
 *         type: string
 *        descTipoArchivo:
 *         type: string
 *   responses:
 *     200:
 *       description: Retorna el TipoArchivo actualizado.
 *     404:
 *       description: No se ha encontrado el TipoArchivo.
 *     500:
 *       description: Error en la base de datos.
 */
router.post("/", async (req, res, next) => {
  try {
    const TipoArchivoFormateado = formatearTipoArchivo(Object.values(req.body));
    const res = await crearTipoArchivo(Object.values(TipoArchivoFormateado));
    res.status(200).send(TipoArchivoFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

export default router;
