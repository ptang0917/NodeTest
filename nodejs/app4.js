var express = require('express');
var app = express();

app.use(express.static('public'))

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'pingpong24',
  database : 'my_db'
});

app.get('/', function (req, res) {
  connection.connect();

  connection.query('SELECT * FROM phillylist', function(err, rows, fields)
  {
      connection.end();

      if (err) throw err;

      res.json(rows);

  });

});

app.get('/', function (req, res) {
  connection.connect();

  connection.query('SELECT * FROM phillylist', function(err, rows, fields)
  {
      connection.end();

      if (err) throw err;

      res.json(rows);

  });

});



app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
