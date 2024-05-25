var mysql = require('mysql2');

var dbConnection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'movies',
});

dbConnection.connect();

module.exports = dbConnection;