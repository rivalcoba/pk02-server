// 1 Importarmos el modulo Router
// de express
import { Router } from 'express';
// Importando el paquete Path
import path from 'path';
import { ROOT_DIR } from '../helpers/path.helper.js';

// Base de datos en Ram
export const products = [];

// 2 Creamos una instancia de un erutador
export const router = Router();

// 3 Registramos rutas al enrutador
// GET "/admin/add-product"
router.get('/add-product', (req, res, next) => {
  // Obteniendo la ruta del recurso
  let resourcePath = path.join(ROOT_DIR, 'server', 'views', 'add-product.html');
  console.log(`📝 Sirviendo recurso: ${resourcePath}`);
  res.sendFile(resourcePath, (err) =>
    console.log("📝 Recurso 'add-product.html' servido con exito 😊")
  );
});

// POST "/admin/add-product"
router.post('/add-product', (req, res) => {
  // Desestructurando de la petición
  // el nombre del producto
  const { name } = req.body;
  // Agregando el producto a la base de datos
  products.push({ name });
  // Realizamos un redireccionamiento
  res.redirect('/');
});
