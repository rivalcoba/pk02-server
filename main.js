// Se importa el modulo
import express from 'express';

// Creando una instancia de express
const app = express();
// Filtrando la ruta '/about'
app.use('/about', (req, res, next) => {
  res.send('<h1>🔦 Acerca de</h1>\n Primera aplicación en express');
});

// Filtrando la ruta raíz
app.use('/', (req, res, next) => {
  res.send('<h1>👨‍💻 Mi App </h1>\n Hola extraño 😁');
});

// Poniendo el servidor a escuchar
app.listen(3000, '0.0.0.0', () => {
  console.log('🤖 Sirviendo en el puerto: http://localhost:3000');
});
