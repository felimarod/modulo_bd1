import { json, Router } from "express";
import {
  obtenerArchivoAdjuntoPorId,
  obtenerTodosLosArchivosAdjuntos,
  formatearArchivoAdjunto,
  actualizarArchivoAdjunto,
  crearArchivoAdjunto,
} from "../logic/archivoAdjunto.js";
var router = Router();

/**
 * @openapi
 * tags:
 *   - name: ArchivoAdjunto
 *     description: Operaciones relacionadas con ArchivoAdjunto
 * /archivoAdjunto/:
 *   get:
 *     tags:
 *       - ArchivoAdjunto
 *     description: Obtener todos los ArchivoAdjunto
 *     responses:
 *       200:
 *         description: Retorna todos los ArchivosAdjuntos.
 */
router.get("/", async (req, res, next) => {
  const resDB = await obtenerTodosLosArchivosAdjuntos();
  let resJSON = resDB.map((Categoria) => formatearArchivoAdjunto(Categoria));
  res.send(resJSON);
});


/**
 * @openapi
 * /archivoAdjunto/{id}:
 *   get:
 *     tags:
 *       - ArchivoAdjunto
 *     description: Obtener ArchivoAdjunto por id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Retorna el ArchivoAdjunto.
 *       404:
 *         description: No se ha encontrado el ArchivoAdjunto.
 */
router.get("/:id", async (req, res, next) => {
    try {
      const resDB = await obtenerArchivoAdjuntoPorId(req.params.id);
      res.status(200).send(formatearArchivoAdjunto(resDB));
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
});
  

/* 
 *  parameters:
 *   - in: path
 *     name: id
 *     required: true
 */
/**
 * @openapi
 * /archivoAdjunto/{id}:
 *  put:
 *   tags:
 *    - ArchivoAdjunto
 *   description: Actualizar ArchivoAdjunto
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
 *        nomArchivo:
 *         type: string
 *
 *   responses:
 *     200:
 *       description: Retorna el ArchivoAdjunto actualizado.
 *     404:
 *       description: No se ha encontrado el ArchivoAdjunto.
 *     500:
 *       description: Error en la base de datos.
 */
router.put("/:id", async (req, res, next) => {
    try {
      const ArchivoAdjuntoFormateado = formatearArchivoAdjunto(
        Object.values({ id: req.params.id, ...req.body })
      );
      await actualizarArchivoAdjunto(Object.values(ArchivoAdjuntoFormateado));
      res.status(200).send(ArchivoAdjuntoFormateado);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
});

/**
 * @openapi
 * /archivoAdjunto/:
 *  post:
 *   tags:
 *    - ArchivoAdjunto
 *   description: Crear ArchivoAdjunto
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        concecArchivo:
 *         type: string
 *        nomArchivo:
 *         type: string
 *   responses:
 *     200:
 *       description: Retorna el Categoria ArchivoAdjunto.
 *     404:
 *       description: No se ha encontrado el ArchivoAdjunto.
 *     500:
 *       description: Error en la base de datos.
 */
router.post("/", async (req, res, next) => {
    try {
      const ArchivoAdjuntoFormateado = formatearArchivoAdjunto(Object.values(req.body));
      const res = await crearArchivoAdjunto(Object.values(ArchivoAdjuntoFormateado));
      res.status(200).send(ArchivoAdjuntoaFormateado);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
});

export default router;