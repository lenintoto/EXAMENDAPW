import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Fauna Urbana API",
      version: "1.0.0",
      description: "API para la aplicación Fauna Urbana",
    },
    servers: [
      {
        
        url: "https://examendapw.onrender.com",
      },
    ],
    paths: {
      "/reports": {
        get: {
          summary: "Obtener todos los reportes",
          responses: {
            200: {
              description: "Operación exitosa",
            },
          },
        },
        post: {
          summary: "Crear un nuevo reporte",
          security: [
            {
              bearerAuth: [],
            },
          ],
          responses: {
            201: {
              description: "Reporte creado exitosamente",
            },
          },
        },
      },
      "/reports/{id}": {
        get: {
          summary: "Obtener un reporte por su ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID del reporte",
            },
          ],
          responses: {
            200: {
              description: "Operación exitosa",
            },
          },
        },
        put: {
          summary: "Actualizar un reporte",
          security: [
            {
              bearerAuth: [],
            },
          ],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID del reporte",
            },
          ],
          responses: {
            200: {
              description: "Reporte actualizado exitosamente",
            },
          },
        },
        delete: {
          summary: "Eliminar un reporte",
          security: [
            {
              bearerAuth: [],
            },
          ],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID del reporte",
            },
          ],
          responses: {
            200: {
              description: "Reporte eliminado exitosamente",
            },
          },
        },
      },
      "/respuesta": {
        get: {
          summary: "Obtener todas las respuestas",
          responses: {
            200: {
              description: "Operación exitosa",
            },
          },
        },
        post: {
          summary: "Crear una nueva respuesta",
          security: [
            {
              bearerAuth: [],
            },
          ],
          responses: {
            201: {
              description: "Respuesta creada exitosamente",
            },
          },
        },
      },
      "/respuesta/{id}": {
        get: {
          summary: "Obtener una respuesta por su ID",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID de la respuesta",
            },
          ],
          responses: {
            200: {
              description: "Operación exitosa",
            },
          },
        },
        put: {
          summary: "Actualizar una respuesta",
          security: [
            {
              bearerAuth: [],
            },
          ],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID de la respuesta",
            },
          ],
          responses: {
            200: {
              description: "Respuesta actualizada exitosamente",
            },
          },
        },
        delete: {
          summary: "Eliminar una respuesta",
          security: [
            {
              bearerAuth: [],
            },
          ],
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "ID de la respuesta",
            },
          ],
          responses: {
            200: {
              description: "Respuesta eliminada exitosamente",
            },
          },
        },
      },
      "/user/register": {
        post: {
          summary: "Registrar un nuevo usuario",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Usuario registrado exitosamente",
            },
          },
        },
      },
      "/user/login": {
        post: {
          summary: "Iniciar sesión de usuario",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoginCredentials",
                },
              },
            },
          },
          responses: {
            200: {
              description: "Inicio de sesión exitoso",
            },
          },
        },
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            username: {
              type: "string",
            },
            email: {
              type: "string",
            },
            password: {
              type: "string",
            },
          },
        },
        LoginCredentials: {
          type: "object",
          properties: {
            email: {
              type: "string",
            },
            password: {
              type: "string",
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"], // Ruta a los archivos donde se definen las rutas y controladores
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use("/api/v1/docs.json", (req, res) => {
    res.setHeader("Content-type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(`Version 1 docs | port: ${port}`);
};

const V1SwaggerDocs = swaggerDocs;

export { swaggerDocs, V1SwaggerDocs, swaggerSpec }; // Exportar swaggerSpec
