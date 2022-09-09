const express=require("express");
const app = express();
const routes=require("./src/Routes/routes.js");

//Middleware
app.use(express.json());
app.use(express.urlencoded())  //Procesar datos de formulario a objeto

//Routes
app.use(routes);
app.listen(9000);
console.log("Servidor en Puerto 9000");