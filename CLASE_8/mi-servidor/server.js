const express = require("express");
const cors = require("cors");
const path = require("path");
const PORT = 3000;
const app = express ();

//middlewares para poder tener peticiones al server y para describir...
app.use(cors());
app.use(express.json());

//Utiliza rl foder public para cargar elementos estáticos
app.use(express.static(path.join(__dirname,"public")));

////////PÁGINAS//////
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});

app.get("/form", (req,res) => {
    res.sendFile(path.join(__dirname, "FORM.html"))
});

///////////PROCESOS///////////
app.get('/geojson',(req,res) => {

});

app.listen(PORT,()=> {
    console.log (`El servidor está corriendo en http://localhost:${PORT}`);
});