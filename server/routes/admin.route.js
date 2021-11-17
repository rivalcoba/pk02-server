// 1 Importarmos el modulo Router
// de express
import { Router } from 'express';
// Importando el paquete Path
import path from 'path';
import { ROOT_DIR } from '../helpers/path.helper.js';

// 2 Creamos una instancia de un erutador
const router = Router();

// 3 Registramos rutas al enrutador
// GET "/admin/add-product"
router.get('/add-product', (req, res, next) => {
  // Obteniendo la ruta del recurso
  let resourcePath = path.join(ROOT_DIR, 'server', 'views', 'add-product.html');
  console.log(`📝 Sirviendo recurso: ${resourcePath}`);
  res.sendFile(resourcePath,err=>console.log("📝 Recurso 'add-product.html' servido con exito 😊"));
});

// POST "/admin/add-product"
router.post('/add-product', (req, res) => {
  // Realizamos la extrancción de la información
  // del cuerpo de la petición
  return res.json(req.body);
  // Realizamos un redireccionamiento
  res.redirect('/');
});

export default router;
