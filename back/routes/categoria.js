import { json, Router } from "express";
import {
  obtenerCategoriaPorId,
  obtenerTodasLasCategorias,
  formatearCategoria,
  actualizarCategoria,
  crearCategoria,
} from "../logic/categoria.js";

var router = Router();

/**
 * @openapi
 * tags:
 *   - name: Categoria
 *     description: Operaciones relacionadas con Categoria
 * /categoria/:
 *   get:
 *     tags:
 *       - Categoria
 *     description: Obtener todas las Categoria
 *     responses:
 *       200:
 *         description: Retorna todas las Categorias.
 */
router.get("/", async (req, res, next) => {
  const resDB = await obtenerTodasLasCategorias();
  let resJSON = resDB.map((Categoria) => formatearCategoria(Categoria));
  res.send(resJSON);
});

/**
 * @openapi
 * /categoria/{id}:
 *   get:
 *     tags:
 *       - Categoria
 *     description: Obtener Categoria por id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Retorna el Categoria.
 *       404:
 *         description: No se ha encontrado el Categoria.
 */
router.get("/:id", async (req, res, next) => {
  try {
    const resDB = await obtenerCategoriaPorId(req.params.id);
    res.status(200).send(formatearCategoria(resDB));
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

// TODO: Revisar 
/* 
 *  parameters:
 *   - in: path
 *     name: id
 *     required: true
 */
/**
 * @openapi
 * /categoria/{id}:
 *  put:
 *   tags:
 *    - Categoria
 *   description: Actualizar Categoria
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
 *        desCategoria:
 *         type: string
 *
 *   responses:
 *     200:
 *       description: Retorna el Categoria actualizado.
 *     404:
 *       description: No se ha encontrado el Categoria.
 *     500:
 *       description: Error en la base de datos.
 */
router.put("/:id", async (req, res, next) => {
  try {
    const CategoriaFormateado = formatearCategoria(
      Object.values({ id: req.params.id, ...req.body })
    );
    await actualizarCategoria(Object.values(CategoriaFormateado));
    console.log(resDB);
    res.status(200).send(CategoriaFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /categoria/:
 *  post:
 *   tags:
 *    - Categoria
 *   description: Crear Categoria
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        idCategoria:
 *         type: string
 *        desCategoria:
 *         type: string
 *   responses:
 *     200:
 *       description: Retorna el Categoria actualizado.
 *     404:
 *       description: No se ha encontrado el Categoria.
 *     500:
 *       description: Error en la base de datos.
 */
router.post("/", async (req, res, next) => {
  try {
    const CategoriaFormateado = formatearCategoria(Object.values(req.body));
    const res = await crearCategoria(Object.values(CategoriaFormateado));
    res.status(200).send(CategoriaFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

export default router;
