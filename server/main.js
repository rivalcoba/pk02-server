// Se importa el modulo
import express from 'express';
import path from 'path';
import { ROOT_DIR } from './helpers/path.helper.js';


// Importando enrutadores
import adminRoute from './routes/admin.route.js';
import homeRoute from './routes/home.route.js'

// Creando una instancia de express
const app = express();

// Se registra el middleware del BodyParser
app.use(express.urlencoded({ extended: false }));

// Se agrega ruta admin
app.use('/admin', adminRoute);

// Se agrega ruta home
app.use(homeRoute);

// 404 error apge
app.use((req, res, next) => {
  let resourcePath = path.join(ROOT_DIR, 'server', 'views', 'not-found.html');
  console.log(`📝 Sirviendo recurso: ${path.resolve()}`);
  res.status(404).sendFile(resourcePath,err=>console.log("📝 Recurso'not-found.html' servido con exito 😊"));
});


// Poniendo el servidor a escuchar
app.listen(3000, '0.0.0.0', () => {
  console.log('🤖 Sirviendo en el puerto: http://localhost:3000');
});
