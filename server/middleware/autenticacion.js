const jwt = require('jsonwebtoken');
///////////////
//Verificar Token
///////////////

let verificarToken = (req, res, next) =>{
  
    let token = req.get('token'); //el .get lee lo qu viene en el header
    jwt.verify(token, process.env.SEED, (err, decoded)=>{
        if(err){
            return res.status(401).json({//401 error authorization
                ok:false,
                err
            });
        }

        req.usuario = decoded.usuario;
        next();
    });


};


////////////////////////
//Verificar Admin_ROLE
/////////////////////

let verificarAdminRole = (req, res, next) =>{
  
    let usuario = req.usuario;

 //   return res.json({usuario});

    if(usuario.role === 'ADMIN_ROLE'){
        next();
    }else{
        return res.json({
            ok:false,
            err: {
                message: 'EL usuario no es Administrador'
            }
        });
    }


};


module.exports = {
    verificarToken,
    verificarAdminRole
}