import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express"; // Importar swaggerUi
import { swaggerSpec } from "../docs/swagger.js"; // Importar swaggerSpec desde swagger.js

import router from "./routers/report_routes.js";
import routerR from "./routers/respuesta_routes.js";
import routerU from "./routers/user_routes.js";

import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";

const app = express();
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./uploads",
  })
);

app.use(cors());
app.use(express.json());

app.set("port", process.env.PORT || 3000);

app.use("/api", router);
app.use("/api", routerR);
app.use("/api", routerU);

// Configuración de Swagger
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/v1/docs.json", (req, res) => {
  res.setHeader("Content-type", "application/json");
  res.send(swaggerSpec);
});

// Manejo de una ruta que no sea encontrada
app.use((req, res) => res.status(404).send("Endpoint no encontrado - 404"));

export default app;
