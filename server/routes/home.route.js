import { Router } from 'express';
import path from 'path';

const router = Router();

// Filtrando la ruta '/about'
router.get('/about', (req, res, next) => {
  res.send('<h1>🔦 Acerca de</h1>\n Primera aplicación en express');
});

// Filtrando la ruta raíz
router.get('/', (req, res, next) => {
  let resourcePath = path.join(path.resolve(), 'server', 'views', 'shop.html');
  console.log(`📝 Sirviendo recurso: ${resourcePath}`);
  res.sendFile(resourcePath,err=>console.log("📝 Recurso 'shop.html' servido con exito 😊"));
});

export default router;
