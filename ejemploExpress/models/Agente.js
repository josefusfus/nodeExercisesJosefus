/**
 * Created by joseluissaezsanchez on 25/4/16.
 */
"'use strict";

var mongoose = require('mongoose');

// creamos el Schema

var agenteSchema = mongoose.Schema({
  name: {type : String,
    required : true},
    age: Number
});


//Hacer metodo estatico

agenteSchema.statics.list = function (filter,start,limit,sort, cb) {

  var query = Agente.find(filter);
  query.skip(start);
  query.sort(sort);
  return query.exec(cb);
  
};

// Lo asignamos al modelo
var Agente = mongoose.model('Agente', agenteSchema);
