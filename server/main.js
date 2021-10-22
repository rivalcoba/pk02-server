// Se importa el modulo
import express from 'express';

// Importando enrutadores
import adminRoute from './routes/admin.route.js';
import homeRoute from './routes/home.route.js'

// Creando una instancia de express
const app = express();

// Se registra el middleware del BodyParser
app.use(express.urlencoded({ extended: false }));

// Se agrega ruta admin
app.use(adminRoute);
// Se agrega ruta home
app.use(homeRoute);


// Poniendo el servidor a escuchar
app.listen(3000, '0.0.0.0', () => {
  console.log('🤖 Sirviendo en el puerto: http://localhost:3000');
});
