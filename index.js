const express = require('express'); // sintaxis de importacion nodejs
require('dotenv').config();
const { dbConection } = require('./config/database');
const cors = require('cors');

//crear el servidor express
const app = express();

//Configuración de CORS
app.use(cors());

//estableciendo conexion a la bd

dbConection();
//console.log(process.env);

//Rutas de la API
app.get('/', (req, res) => {
    res.status(400).json({
        ok: true,
        msg: 'Bienvenidos a node'
    });
});

//codigo para desplegar el servidor 

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT)
})