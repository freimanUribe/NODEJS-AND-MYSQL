const store = require('./store');

function search(user, password){
    return new Promise((resolve, reject)=>{
        if (!user || !password) {
            console.error('[MessageController] No hay usuario o contraseña');
            reject('Los datos son incorrectos');
            return false;
        }
        if ((user=='freiman15')&&(password=='123456789')) {
            const fullMessage = {
                user:user,
                password: password,
                date: new Date(),
            };
            store.add(fullMessage);
            resolve(fullMessage);
        }else{
            console.error('[MessageController] No hay usuario2 o contraseña2');
            reject('Los datos son incorrectos2');
            return false;
        }
        
    });
}

function addMessage(user, message) {
    return new Promise((resolve, reject)=>{
        if (!user || !message) {
            console.error('[MessageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false;
        }
        const fullMessage = {
            user:user,
            password: message
        };
        
        resolve(store.add(fullMessage));
    });
}

function getMessages() {
    return new Promise((resolve, reject)=>{
        resolve(store.list());
    });
}

module.exports = {
    search,
    addMessage,
    getMessages
}