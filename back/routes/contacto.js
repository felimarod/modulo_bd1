import { Router } from "express";
import {
  obtenerContactoPorId,
  obtenerTodosLosContactos,
  formatearContacto,
  actualizarContacto,
  crearContacto,
  obtenerContactosPorUsuario,
} from "../logic/contacto.js";

var router = Router();

/**
 * @openapi
 * tags:
 *   - name: Contactos
 *     description: Operaciones relacionadas con Contactos
 * /contacto/:
 *   get:
 *     tags:
 *       - Contactos
 *     description: Obtener todos los Contactos
 *     responses:
 *       200:
 *         description: Retorna todos los Contactos.
 */
router.get("/", async (req, res, next) => {
  const resDB = await obtenerTodosLosContactos();
  let resJSON = resDB.map((Contacto) => formatearContacto(Contacto));
  res.send(resJSON);
});

/**
 * @openapi
 * /contacto/{id}:
 *   get:
 *     tags:
 *       - Contactos
 *     description: Obtener Contacto por id
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Retorna el Contacto.
 *       404:
 *         description: No se ha encontrado el Contacto.
 */
router.get("/:id", async (req, res, next) => {
  try {
    const resDB = await obtenerContactoPorId(req.params.id);
    res.status(200).send(formatearContacto(resDB));
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});


/**
 * @openapi
 * /contacto/{id}:
 *  put:
 *   tags:
 *    - Contactos
 *   description: Actualizar Contacto
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
 *        contacto:
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
 *       description: Retorna el Contacto actualizado.
 *     404:
 *       description: No se ha encontrado el Contacto.
 *     500:
 *       description: Error en la base de datos.
 */
router.put("/:id", async (req, res, next) => {
  try {
    const ContactoFormateado = formatearContacto(
      Object.values({ id: req.params.id, ...req.body })
    );
    await actualizarContacto(Object.values(ContactoFormateado));
    res.status(200).send(ContactoFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

/**
 * @openapi
 * /contacto/:
 *  post:
 *   tags:
 *    - Contactos
 *   description: Crear Contacto
 *   requestBody:
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       properties:
 *        nombreContacto:
 *         type: string
 *        correoContacto:
 *         type: string
 *        usuario: 
 *         type: string
 *        usuario_1:
 *         type: string
 *   responses:
 *     200:
 *       description: Retorna el Contacto actualizado.
 *     404:
 *       description: No se ha encontrado el Contacto.
 *     500:
 *       description: Error en la base de datos.
 */
router.post("/", async (req, res, next) => {
  try {
    const ContactoFormateado = formatearContacto(Object.values(req.body));
    const res = await crearContacto(Object.values(ContactoFormateado));
    res.status(200).send(ContactoFormateado);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});


/**
 * @openapi
 * /contacto/usuario/{id}:
 *   get:
 *     tags:
 *       - Contactos
 *     description: Obtener Contacto por Usuario
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *     responses:
 *       200:
 *         description: Retorna el Contacto.
 *       404:
 *         description: No se ha encontrado el Contacto.
 */
router.get("/usuario/:id", async (req, res, next) => {
  const resDB = await obtenerContactosPorUsuario(req.params.id);
  let resJSON = resDB.map((Contacto) => formatearContacto(Contacto));
  res.send(resJSON);
});

export default router;
