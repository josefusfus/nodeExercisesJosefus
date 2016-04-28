var express = require('express');
var router = express.Router();
var suma = require('../lib/suma');
/* GET home page. */
router.get('/', function(req, res, next) {
  //Intentar algun ejercicio aqui
  res.render('index', { 
    title: 'Express' , 
    suma: suma(3,5), 
    segundo: new Date().getSeconds(),
    users: ['smith', 'sanchez']
  });
});

module.exports = router;
