import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import hbs from "hbs";
import 'dotenv/config';

const app = express();
const port = process.env.PORT;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Handlerbar
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//Servir contenido estático
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    nombre: "Doris Mosquera",
    titulo: "Curso Node.JS",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    nombre: "Doris Mosquera",
    titulo: "Curso Node.JS",
  });  
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    nombre: "Doris Mosquera",
    titulo: "Curso Node.JS",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
