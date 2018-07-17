var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pingpong24",
  database: "my_db"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM food", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
