var express = require('express');
var app = express();
var bodyParser  = require('body-parser');

var config = require('./config'); // get our config file

// Api Router Handler
var api = express.Router();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

api.get('/db', function(req, res){

    var sql = require("mssql");
    sql.config = {
        server: config.mssql_ip,
        user: config.mssql_user,
        password: config.mssql_pass,
        database: config.mssql_database
    };
  const pool1 = new sql.ConnectionPool(sql.config, err => {
    pool1.request() // or: new sql.Request(pool1)
    .query('SELECT * FROM (SELECT *, ROW_NUMBER() OVER (ORDER BY Record) as row FROM ExportLoadData) a WHERE row > 1 and row <= 100', (err, result) => {
        res.json(result);
      })
  })

  pool1.on('error', err => {
     res.json(result);
  })

  const pool2 = new sql.ConnectionPool(sql.config, err => {
      pool2.request() // or: new sql.Request(pool2)
      .query('SELECT * FROM (SELECT *, ROW_NUMBER() OVER (ORDER BY Record) as row FROM ExportLoadData) a WHERE row > 1 and row <= 100', (err, result) => {
    // ... error checks
      })
  })

  pool2.on('error', err => {
      // ... error handler
  })	
});

app.get('/', function(req, res){
  res.send("Zero Waste Api 1.0.0");
});

app.use('/api', api);

app.listen(3001);
