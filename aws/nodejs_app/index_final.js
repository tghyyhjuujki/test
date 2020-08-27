const express    = require('express');
const mysql      = require('mysql');
const bodyParser = require('body-parser');
//const dbconfig   = require('./config/database.js');
const connection = mysql.createConnection({
  host     : '[rds host]',
  user     : '[rds user]',
  password : '[rds password]',
  database : '[rds database]'
});
//const connection = mysql.createConnection(dbconfig);

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

/* POST */
app.post('/users', (req, res) => {
    console.log("## post request:" + req.body.name); 
    var name = req.body.name;
    var email = req.body.email;
    connection.query('INSERT INTO Users(name, email) VALUES(?, ?)', 
	[name, email], (error, results, fields) => {
	if (error) throw error;
	res.json({ok:true});
    });
});


app.get('/users', (req, res) => {
  connection.query('SELECT * from Users', (error, rows) => {
    if (error) throw error;
    console.log('User info is: ', rows);
    res.send(rows);
  });
});

app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});
