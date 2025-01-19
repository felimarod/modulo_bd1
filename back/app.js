import createError from "http-errors";
import express from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import logger from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

import indexRouter from "./routes/index.js";
import empleadosRouter from "./routes/empleados.js";

// Obtener el equivalente de __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API with Swagger',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'], // files containing annotations as above
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
app.use("/empleados", empleadosRouter);
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

export default app;
