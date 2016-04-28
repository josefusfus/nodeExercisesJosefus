/**
 * Created by joseluissaezsanchez on 21/4/16.
 */
"use strict";

var espress = require('express');
var router = espress.Router();



var auth = function (req, res, next) {
    if (req.query.clave !== '1234'){
    res.status(401).send('no estas autorizado');
        return;
    }
    next();
};

router.get('/', auth, function (req, res) {
    res.send('Raiz del admin');

})

// Regex:solo numeros de 0 a 9
router.get('/:identificador([0-9]+)/:piso(A|B|C)', function (req,res) {
    console.log('req.params', req.params);
    console.log('req.query' , req.query);
    res.send('Zona de admin del usuario  ' + req.params.identificador + ' piso ' + req.params.piso);

});

router.post('/', function (req, res) {
    console.log('req.body', req.body);
    res.send('Body Leido');

});

module.exports = router;


