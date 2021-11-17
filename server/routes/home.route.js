import { Router } from 'express';
import path from 'path';
import { ROOT_DIR } from '../helpers/path.helper.js';

const router = Router();

// Filtrando la ruta '/about'
router.get('/about', (req, res, next) => {
  res.send('<h1>🔦 Acerca de</h1>\n Primera aplicación en express');
});

// Filtrando la ruta raíz
// "GET /""
router.get('/', (req, res, next) => {
  let resourcePath = path.join(ROOT_DIR, 'server', 'views', 'shop.html');
  console.log(`📝 Sirviendo recurso: ${resourcePath}`);
  res.sendFile(resourcePath, (err) =>
    console.log("📝 Recurso 'shop.html' servido con exito 😊")
  );
});

export default router;
