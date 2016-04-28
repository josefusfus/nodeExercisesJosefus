/**
 * Created by joseluissaezsanchez on 25/4/16.
 */
"use strict";

var mongoose = require('mongoose');
var conn = mongoose.connection;


//Handlers de eventos de conexion
conn.on('error', console.log.bind(console, 'conncetion error'));

conn.once('open', function(){
    console.log('Connected to mongodb');
});

// conectar a la base de datos

mongoose.connect('mongodb://localhost:27017/cursonode');
