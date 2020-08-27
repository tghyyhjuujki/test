const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '[rds host]',
  user     : '[rds user]',
  password : '[rds password]',
  database : '[rds database]'
});
connection.connect();
connection.query('SELECT * from Users', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});
connection.end();
