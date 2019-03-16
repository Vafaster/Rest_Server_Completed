const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/cuser');
const app = express();



app.post('/login', (req, res)=>{

    let body = req.body;
    
    Usuario.findOne({email:body.email},(err, userObj)=>{
        if(err){
            return res.status(500).json({
                ok: false,
                
            });
        }

        if(!userObj){
            return res.status(500).json({
                ok: false,
                err:{
                    message: 'Usuario o Contraseña Inválido'
                }
            });
        }

        if (!bcrypt.compareSync(body.password, userObj.password)){
            return res.status(500).json({
                ok: false,
                err:{
                    message: 'Contraseña Inválido'
                }
            });
        }

        let token = jwt.sign({
            usuario: userObj
        },process.env.SEED,{expiresIn: process.env.CADUCIDAD_TOKEN});

        return res.json({
            ok:true,
            usuario: userObj,
            token
        });

    });

   
});

module.exports = app;