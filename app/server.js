const express = require('express');
const app = express();

//Configuracion
const PORT = process.env.PORT || 3000;

// Middleware

// Para poder rellenar el req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Rutas
app.get('/', function (req, res) {
    res.json("Hola mundo")
});


// Arranque servidor
app.listen(PORT, function () {
    console.log(`La app ha arrancado en http://localhost:${PORT}`)

});

