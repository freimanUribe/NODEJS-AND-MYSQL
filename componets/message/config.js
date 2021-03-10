var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: '',
  database: ''
});

connection.connect((err) => {
  if (err) {
    console.error('error1 connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// connection.end();

module.exports={
  connection,
};  