import { Router } from "express";

const router = Router();

// Filtrando la ruta '/about'
router.get('/about', (req, res, next) => {
  res.send('<h1>🔦 Acerca de</h1>\n Primera aplicación en express');
});

// Filtrando la ruta raíz
router.get('/', (req, res, next) => {
  res.send('<h1>👨‍💻 Mi App </h1>\n Hola extraño 😁');
});
export default router;
