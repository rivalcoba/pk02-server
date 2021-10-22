// Se importa el modulo
import express from 'express';

// Creando una instancia de express
const app = express();

// Se registra el middleware del BodyParser
app.use(express.urlencoded({extended: false}));

// Filtrando la ruta '/about'
app.use('/about', (req, res, next) => {
  res.send('<h1>🔦 Acerca de</h1>\n Primera aplicación en express');
});

app.use('/add-student-form', (req, res, next) => {
  res.send(`
  <form action="/add-student" method="POST">
    <label for="student-bame">👩‍🎓 Student Name</label>
    <input type="text" name="name" id="student-name">
    <button type="submit">Agregar estudiante</button>
  </form>
  `);
});

app.post('/add-student', (req, res) =>{
  // Realizamos la extrancción de la información
  // del cuerpo de la petición
  return res.json(req.body);
  // Realizamos un redireccionamiento
  res.redirect('/');
});

// Filtrando la ruta raíz
app.use('/', (req, res, next) => {
  res.send('<h1>👨‍💻 Mi App </h1>\n Hola extraño 😁');
});

// Poniendo el servidor a escuchar
app.listen(3000, '0.0.0.0', () => {
  console.log('🤖 Sirviendo en el puerto: http://localhost:3000');
});
