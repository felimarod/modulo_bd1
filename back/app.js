import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import createError from "http-errors";
import logger from "morgan";
import { dirname, join } from "path";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { fileURLToPath } from "url";

import archivoAdjuntoRouter from "./routes/archivoAdjunto.js";
import categoriaRouter from "./routes/categoria.js";
import contactoRouter from "./routes/contacto.js";
import estadoRouter from "./routes/estado.js";
import indexRouter from "./routes/index.js";
import mensajeRouter from "./routes/mensaje.js";
import paisRouter from "./routes/pais.js";
import tipoArchivoRouter from "./routes/tipoArchivo.js";
import tipoCarpetaRouter from "./routes/tipoCarpeta.js";
import tipoCopiaRouter from "./routes/tipoCopia.js";
import usuarioRouter from "./routes/usuario.js";
import destinatarioRouter from "./routes/destinatario.js";

// Obtener el equivalente de __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express API with Swagger",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"], // files containing annotations as above
};
// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

// view engine setup
app.set("views", join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/usuario", usuarioRouter);
app.use("/tipoCarpeta", tipoCarpetaRouter);
app.use("/contacto", contactoRouter);
app.use("/categoria", categoriaRouter);
app.use("/pais", paisRouter);
app.use("/tipoCopia", tipoCopiaRouter);
app.use("/tipoArchivo", tipoArchivoRouter);
app.use("/estado", estadoRouter);
app.use("/archivoAdjunto", archivoAdjuntoRouter);
app.use("/mensaje", mensajeRouter);
app.use("/destinatario", destinatarioRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Configura CORS para permitir solicitudes desde el frontend
app.use(
  "*",
  cors({
    origin: "http://localhost:5173", // Permite solo este origen
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Métodos permitidos
    allowedHeaders: ["Content-Type", "Authorization"], // Encabezados permitidos
  })
);

export default app;
