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
  console.log("📝 Sirivendo recurso: 'shop.html' 😊")
  res.render('shop');
});

export default router;
