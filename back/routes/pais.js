import { Router } from "express";
import {
  obtenerPaisPorId,
  obtenerTodosLosPaises,
  formatearPais,
  actualizarPais,
  crearPais,
} from "../logic/pais.js";

var router = Router();

/**
 * @openapi
 * tags:
 *   - name: Pais
 *     description: Operaciones relacionadas con Pais
 * /Pais/:
 *   get:
 *     tags:
 *       - Pais
 *     description: Obtener todos los Paises
 *     responses:
 *       200:
 *         description: Retorna todos los Paiss.
 */
router.get("/", async (req, res, next) => {
  const resDB = await obtenerTodosLosPaises();
  let resJSON = resDB.map((Pais) => formatearPais(Pais));
  res.send(resJSON);
});

/**
 * @openapi
 * /Pais/{id}:
 *   get:
 *     tags:
 *       - Pais
 *     description: Obtener Pais por id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Retorna el Pais.
 *       404:
 *         description: No se ha encontrado el Pais.
 */
router.get("/:id", async (req, res, next) => {
  try {
    const resDB = await obtenerPaisPorId(req.params.id);
    res.status(200).send(formatearPais(resDB));
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /Pais/{id}:
 *  put:
 *   tags:
 *    - Pais
 *   description: Actualizar Pais
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
 *        idPais:
 *         type: string
 *        nomPais:
 *         type: string
 *        dominio:
 *         type: string
 *        
 *   responses:
 *     200:
 *       description: Retorna el Pais actualizado.
 *     404:
 *       description: No se ha encontrado el Pais.
 *     500:
 *       description: Error en la base de datos.
 */
router.put("/:id", async (req, res, next) => {
  try {
    const PaisFormateado = formatearPais(
      Object.values({ id: req.params.id, ...req.body })
    );
    await actualizarPais(Object.values(PaisFormateado));
    res.status(200).send(PaisFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /Pais/:
 *  post:
 *   tags:
 *    - Pais
 *   description: Crear Pais
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        idPais:
 *         type: string
 *        nomPais:
 *         type: string
 *        dominio:
 *         type: string
 *   responses:
 *     200:
 *       description: Retorna el Pais actualizado.
 *     404:
 *       description: No se ha encontrado el Pais.
 *     500:
 *       description: Error en la base de datos.
 */
router.post("/", async (req, res, next) => {
  try {
    const PaisFormateado = formatearPais(Object.values(req.body));
    const res = await crearPais(Object.values(PaisFormateado));
    res.status(200).send(PaisFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

export default router;
