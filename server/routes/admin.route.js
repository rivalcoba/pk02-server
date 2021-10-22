// 1 Importarmos el modulo Router
// de express
import { Router } from 'express';

// 2 Creamos una instancia de un erutador
const router = Router();

// 3 Registramos rutas al enrutador
router.get('/add-product-form', (req, res, next) => {
  res.send(`
  <form action="/add-product" method="POST">
    <label for="prduct-name">☕ Product Name</label>
    <input type="text" name="name" id="prduct-name">
    <button type="submit">Agregar producto</button>
  </form>
  `);
});

router.post('/add-product', (req, res) =>{
  // Realizamos la extrancción de la información
  // del cuerpo de la petición
  return res.json(req.body);
  // Realizamos un redireccionamiento
  res.redirect('/');
});

export default router;