import { Router } from "express";
import {
  obtenerUsuarioPorId,
  obtenerTodosLosUsuarios,
  formatearUsuario,
  actualizarUsuario,
  crearUsuario,
  verificarUsuario,
} from "../logic/usuario.js";
import { log } from "console";

var router = Router();

/**
 * @openapi
 * tags:
 *   - name: Usuarios
 *     description: Operaciones relacionadas con Usuarios
 * /usuario/:
 *   get:
 *     tags:
 *       - Usuarios
 *     description: Obtener todos los Usuarios
 *     responses:
 *       200:
 *         description: Retorna todos los Usuarios.
 */
router.get("/", async (req, res, next) => {
  const resDB = await obtenerTodosLosUsuarios();
  let resJSON = resDB.map((Usuario) => formatearUsuario(Usuario));
  res.send(resJSON);
});

/**
 * @openapi
 * /usuario/{id}:
 *   get:
 *     tags:
 *       - Usuarios
 *     description: Obtener Usuario por id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Retorna el Usuario.
 *       404:
 *         description: No se ha encontrado el Usuario.
 */
router.get("/:id", async (req, res, next) => {
  try {
    const resDB = await obtenerUsuarioPorId(req.params.id);
    res.status(200).send(formatearUsuario(resDB));
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /usuario/verificar/:
 *  put:
 *   tags:
 *    - Usuarios
 *   description: Verificar existencia de usuario
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        usuario:
 *         type: string
 *        nombre:
 *         type: string
 *        apellido:
 *         type: string
 * 
 *   responses:
 *     200:
 *       description: Retorna el Usuario actualizado.
 *     404:
 *       description: No se ha encontrado el Usuario.
 *     500:
 *       description: Error en la base de datos.
 */
router.put("/verificar/", async (req, res, next) => {
  try {
    const resDB = await verificarUsuario(req.body);
    res.status(200).send(formatearUsuario(resDB));
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /usuario/{id}:
 *  put:
 *   tags:
 *    - Usuarios
 *   description: Actualizar Usuario
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
 *        usuario:
 *         type: string
 *        nombre:
 *         type: string
 *        apellido:
 *         type: string
 *        fechaNacimiento:
 *         type: string
 *        correoAlterno:
 *         type: string
 *        celular:
 *         type: string
 *        idEstado:
 *         type: string
 *        idPais:
 *         type: string
 *   responses:
 *     200:
 *       description: Retorna el Usuario actualizado.
 *     404:
 *       description: No se ha encontrado el Usuario.
 *     500:
 *       description: Error en la base de datos.
 */
router.put("/:id", async (req, res, next) => {
  try {
    const UsuarioFormateado = formatearUsuario(
      Object.values({ id: req.params.id, ...req.body })
    );
    await actualizarUsuario(Object.values(UsuarioFormateado));
    res.status(200).send(UsuarioFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /usuario/:
 *  post:
 *   tags:
 *    - Usuarios
 *   description: Crear Usuario
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        usuario:
 *         type: string
 *        nombre:
 *         type: string
 *        apellido:
 *         type: string
 *        fechaNacimiento:
 *         type: date
 *        fechaCreacion:
 *         type: string
 *        correoAlterno:
 *         type: string
 *        celular:
 *         type: string
 *        idEstado:
 *         type: string
 *        idPais:
 *         type: string
 * 
 *   responses:
 *     200:
 *       description: Retorna el Usuario actualizado.
 *     404:
 *       description: No se ha encontrado el Usuario.
 *     500:
 *       description: Error en la base de datos.
 */
router.post("/", async (req, res, next) => {
  try {
    const UsuarioFormateado = formatearUsuario(Object.values(req.body));
    const res = await crearUsuario(Object.values(UsuarioFormateado));
    res.status(200).send(UsuarioFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

export default router;
