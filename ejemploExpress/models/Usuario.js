/**
 * Created by joseluissaezsanchez on 26/4/16.
 */
var mongoose = require('mongoose');

// creamos el Schema

var usuarioSchema = mongoose.Schema({
    user: {
        type: String,
        required: true , // Hacemos que el nombre sea requerido
        index: true //Hacemos que monggose vaya poniendo indices
        },
    pass: String
});


//Hacer metodo estatico

usuarioSchema.statics.list = function (filter,start,limit,sort, cb) {

    var query = Agente.find(filter);
    query.skip(start);
    query.sort(sort);
    return query.exec(cb);

};

// Lo asignamos al modelo
var Usuario = mongoose.model('Usuario', usuarioSchema);

