/**
 * Created by joseluissaezsanchez on 21/4/16.
 */
"use stric";

// Crear una funcion

var suma = function (n1,n2) {
    return n1 + n2;

}

// Exportar una función

module.exports = suma;

//Exporto un objeto con la funcion como metodo 
//module.exports.suma = sumar;

// equivalente a hacer 
//exports.suma = sumar;

//Asi me cargo el alias y no funciona
//exports = sumar;
