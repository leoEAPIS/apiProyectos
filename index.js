const express = require('express'); // sintaxis de importacion nodejs
require('dotenv').config();
const { dbConection } = require('./config/database');
const cors = require('cors');

//crear el servidor express
const app = express();

//Configuración de CORS
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//estableciendo conexion a la bd

dbConection();
//console.log(process.env);

//Rutas de la API
app.use('/api/usuarios', require('./routes/usuarios.routes'));
app.use('/api/login', require('./routes/auth.routes'));
//app.use('/api/usuarios', require('./routes/usuarios.routes'));
//app.use('/api/login', require('./routes/auth.routes'));
//codigo para desplegar el servidor 

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT)
})