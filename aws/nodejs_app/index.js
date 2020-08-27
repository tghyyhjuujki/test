const express    = require('express');
const mysql      = require('mysql');
const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);
const bodyParser = require('body-parser');

const app = express();

// configuration =========================
app.set('port', process.env.PORT || 8000);
app.use(bodyParser.json());


app.get('/', (req, res) => {
    var ip = req.headers['x-forwarded-for'] || 
                req.connection.remoteAddress || 
                req.socket.remoteAddress ||
            (req.connection.socket ? req.connection.socket.remoteAddress : null);
    console.log(ip);
    res.send('Hello, World! : ' + ip + "," + new Date());
});

app.get('/users', (req, res) => {
  connection.query('SELECT * from Users', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.get('/users/:id', (req, res) => {
  var sql = 'SELECT * FROM Users WHERE id=' + req.params.id;
  //var sql2 = 'SELECT * FROM Users WHERE name=\'' 
  //			+ req.params.name + '\'';
  connection.query(sql, (error, rows) => {
    if (error) throw error;
    console.log('User detail info is: ', rows);
    res.send(rows);
  });

});

app.post('/users', (req, res) => {
  var name = req.body.name;
  var email = req.body.email;
  connection.query("INSERT INTO Users(NAME, EMAIL) VALUES(?,?)", 
		[name, email], (error, resutls, fields) => {
    if (error) throw error;
    res.json({ok:"true"});
  });
});



app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
