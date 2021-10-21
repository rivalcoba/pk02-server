// Se importa el modulo
import http from 'http';
import routes from './routes.js';
import express from 'express';
import { nextTick } from 'process';

// Creando una instancia de express
const app = express();

// Creando el primer middleware
app.use((req, res, next) => {
  console.log('📞 Eston en el middleware 01');
  next();
});
// Otro middleware
app.use((req, res, next) => {
  console.log('📞 Eston en el middleware 02');
  // Enviando una respuesta
  res.send("<h1>Mi APP</h1>\n😁 Hola extraño");
});

// Se crea el server con un factory
const server = http.createServer(app);

// Poniendo el servidor a escuchar
// port,
server.listen(3000, '0.0.0.0', () => {
  console.log('🤖 Sirviendo en el puerto: http://localhost:3000');
});
