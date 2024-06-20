import app from "./server.js";
import { V1SwaggerDocs } from "../docs/swagger.js";
import connection from "./database.js";

connection();

app.listen(app.get("port"), () => {
  V1SwaggerDocs(app, app.get("port"));
  console.log(
    `Servidor funcionando en http://localhost:${app.get("port")}/`
  );
});
