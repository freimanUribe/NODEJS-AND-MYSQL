const express = require('express');
//Importando body-parser
const bodyParser = require('body-parser');

// const router = require('./componets/message/network');
const router = require('./network/routes');

var app = express();

//Usar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//Usar rutas de express
// app.use(router);
router(app);


//Puerto en variable
app.set('port', process.env.PORT || 3000);


//Puerto del local host
app.listen(app.get('port'),()=>{
    //Mensaje por consola
    console.log('servicios arriba en puerto : '+ app.get('port'));
});

