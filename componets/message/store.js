const connection = require('./config').connection;

function addMessage(message) {
    return new Promise((resolve, reject)=>{
        connection.query("INSERT INTO `persona`(`id_persona`, `nombre_persona`, `contrasena_persona`) VALUES (?,?,?)",[2,message.user, message.password],function (error, result){
            if (error) throw error
            resolve('exito');
        })
        connection.end();
    });
}
function getMessage(){
    return new Promise((resolve, reject)=>{
        connection.query("SELECT * FROM persona",function (error, result){
            // if (error) throw error
            resolve(result);
        })
        connection.end();
    });
}

module.exports = {
    list: getMessage,
    add:  addMessage,
}


