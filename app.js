const express = require('express');
const app = express();
const path = require('path')
const puerto = 3000;
const publicPath = path.resolve(__dirname, './public')

//configuraciones
app.use(express.static(publicPath));
// app.use('/static', express.static(__dirname + '/public'));
// app.use('/imagenes', express.static(__dirname + '/public/images'));
//rutas
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/home.html");
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + "/views/register.html");
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + "/views/login.html");
});
//Levantar servidor
app.listen(puerto, () => {
    console.log("Servidor corriendo desde puerto " + puerto);
});