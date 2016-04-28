/**
 * Created by joseluissaezsanchez on 26/4/16.
 */
"use strict";

var jwt = require('jsonwebtoken');
var config = require('../../../local_config');

var express = require('express');
var router = express.Router();

var Usuario = require('mongoose').model('Usuario');

router.post('/authenticate',function (req,res) {
    var user = req.body.user;
    var pass = req.body.pass;

    Usuario.findOne({user: user}).exec(function (err, user) {
        if (err){
            return res.status(500).json({success: false, error: err});
        }
        if (!user){

            return res.status(401).json({success: false, error: 'auth failed. User not found'});
        }
console.log(user, pass);
        if (user.pass !== pass) {
            return res.status(401).json({success: false, error: 'auth failed. Invalid Password'});
        }

        var token = jwt.sign({id: user._id}, config.jwt.secret , {
            expiresInMinutes: 60 * 24 * 2
        });

        res.json({success:true, toke: token});
    });
});

module.exports = router;