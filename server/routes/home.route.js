import { Router } from 'express';
import path from 'path';
import { ROOT_DIR } from '../helpers/path.helper.js';

// Importando la base de datos de productos
import { products } from './admin.route.js';

const router = Router();

// Filtrando la ruta '/about'
router.get('/about', (req, res, next) => {
  res.send('<h1>🔦 Acerca de</h1>\n Primera aplicación en express');
});

// Filtrando la ruta raíz
// "GET:  /"
router.get('/', (_, res) => {
  console.log(products );
  let resourcePath = path.join(ROOT_DIR, 'server', 'views', 'shop.html');
  console.log(`📝 Sirviendo recurso: ${resourcePath}`);
  res.sendFile(resourcePath, (err) =>
    console.log("📝 Recurso 'shop.html' servido con exito 😊")
  );
});

export default router;
