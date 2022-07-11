const express = require("express");
const app = express();

/* app.get("/", (req, res) => {
  res.send("<h1>HcUy6Re2LLBRtj</h1>");
}); */

app.get("/:nombre", (req, res) => {
  if (req.params.nombre === '') {
    res.send("<h1>Hola Desconocido</h1>");
  }
  res.send(`<h1>Hola ${req.params.nombre}</h1>`);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
