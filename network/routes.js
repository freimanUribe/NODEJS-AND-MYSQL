const express = require('express');
const message = require('../componets/message/network');

const routes = function (server) { 

    server.use('/persona', message);

}

module.exports = routes;