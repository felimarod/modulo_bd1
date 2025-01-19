import { Router } from "express";
var router = Router();

/**
 * @openapi
 * /:
 *  get:
 *   description: Devuelve el título de la página
 *   responses:
 *    200:
 *      description: Retorna el título de la página.
 */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

export default router;
