const express = require('express');

// const jwt = require("jsonwebtoken");

//Importa respuestas del response
const response = require('../../network/response');

const controller = require('./controller');

//importacion de la llave secreta
// const keys = require('../../settings/key').key;

const router = express.Router();

//Ruta solo GET
router.get('/', (req, res) => {
    controller.getMessages().then((messageList)=>{
        response.success(req, res, messageList, 200);
    })
    .catch(e=>{
        response.error(req, res, 'Error inesperado', 500);
    })
});


//Ruta solo POST
router.post('/a', function (req, res) {
    req.body.user, req.body.message
    controller.addMessage(req.body.user, req.body.message)
    .then((fullMessage)=>{
        response.success(req, res, fullMessage, 201);
    })
    .catch(e=>{
        response.error(req, res, 'Error informacion invalidad', 400, 'este mensaje es para desarrollador');
    });

});

// router.post("/", (req , res) => {
// console.log(req.body.user, req.body.password);
//     controller.search(req.body.user, req.body.password)
//     .then((fullMessage)=>{

//         const payload = {
//             check:true
//         };
//         const jj = jwt.sign(payload, keys, {
//             expiresIn: '0.5h'
//         });
//         console.log(jj);
//         response.success(req, res, fullMessage, 201);
//     })
//     .catch(e=>{
//         response.error(req, res, 'Error informacion invalidad', 400, 'este mensaje es para desarrollador');
//     });
// });

// router.post("/posts", verifyToken, (req , res) => {
//     res.json('informacion protegita vista');
// });

// function verifyToken(req, res, next){

//     let tokens = req.headers['x-access-token'] || req.headers['authorization'];
    
//     if (!tokens) {
//         res.status(401).send({
//             error:'es necesario el token',
//         });
//         return
//     }
    
//     if (tokens.startsWith('Bearer ')) {
//         tokens = tokens.slice(7, tokens.length);
//     }
    
//     if (tokens) {
//         jwt.verify(tokens, keys, (error, decoded)=>{
//             if (error) {
//                 return res.json({
//                     message:'token no valido',
//                 });
//             }else{ 
//                 req.decoded = decoded+"11";
//                 next();
//             }
           
//         });
//     }
// }

module.exports = router;
