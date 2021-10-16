import fs from "fs";

const requestHandler = (req, res) => {
  // Desestructurando
  let { url, method } = req;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    // preparando encabezado de respuesta HTML
    // Escribiendo la respuesta
    res.write(`
    <html>
    <head>
      <title>Enter Message</title>
    </head>
    <body> 
      <h1>Send Message</h1>
      <form action="/message" method="POST">
        <input type="text" name="message">
        <button type="submit">Send</button>
      </form>
    </body>
    </html>
    `);
    // Cerrando la comunicación
    res.end();
  } else if (url === "/prog-quote") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write(
      '<body> <quote>"The only way to learn a new programming language is by writing programs in it."</quote> <strong>- Dennis Ritchie</strong></body>'
    );
    res.write("</html>");
    // Cerrando la comunicación
    res.end();
  } else if (url === "/message" && method == "POST") {
    // 1. Se crea la variable para guardar datos de entrada
    let body = [];
    // 2. Registrando un manejador de entrada de datos
    req.on("data", (chunk) => {
      // 2.1 Registrando trozos de entrada en la consola
      console.log(chunk);
      // 2.2 Acumulando los datos de entrada
      body.push(chunk);
      // 2.3 Protección en caso de recepción saiva de datos
      if (body.length > 1e6) req.socket.destroy();
    });
    // 3. Registrando un manejador de finalización de entrada de datos
    req.on("end", () => {
      // 3.1 Parseando los datos
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      // 3.2 Guardando el mensaje en un archivo
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.log("> No se pudo grabar archivo");
          res.statusCode = 500;
          res.setHeader("Content-Type", "text/html");
          res.write("ERROR WHEN LOADING FILE");
          return res.end();
        }
        // 3.3 Sending Response.
        // 3.3.1 Estableciendo un codigo de respuesta
        res.statusCode = 302;
        // 3.3.3 Estableciendo la ruta de redireccionamiento
        res.setHeader("Location", "/");
        // 3.3.4 Finalizando comunicación
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body> <h1>NOT FOUND</h1></body>");
    res.write("</html>");
    // Cerrando la comunicación
    res.end();
  }
};

export default {
  requestHandler,
};
