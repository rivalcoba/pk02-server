// Se importa el modulo
import http from "http";
import routes from "./routes.js";

// Se crea el server con un factory
const server = http.createServer(routes.requestHandler);

// Poniendo el servidor a escuchar
// port,
server.listen(3000, "0.0.0.0");
