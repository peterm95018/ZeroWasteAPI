var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
var morgan      = require('morgan');
var mongoose    = require('mongoose');

var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var config = require('./config'); // get our config file
var Client = require('./models/client'); // get our mongoose model

// configuration
mongoose.connect(config.mongodb_host, { user: config.mongodb_user, pass: config.mongodb_password });
app.set('superSecret', config.secret);

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// log request to console
app.use(morgan('dev'));

app.get('/db.json', function(req, res){

    var sql = require("mssql");
    sql.config = {
        server: config.mssql_ip,
        user: config.mssql_user,
        password: config.mssql_pass,
        database: config.mssql_database
    };
  const pool1 = new sql.ConnectionPool(sql.config, err => {
      // ... error checks
      pool1.request() // or: new sql.Request(pool1)
      .query('SELECT * FROM (SELECT *, ROW_NUMBER() OVER (ORDER BY Record) as row FROM ExportLoadData) a WHERE row > 1 and row <= 100', (err, result) => {
        res.send(result);
      })
  })

  pool1.on('error', err => {
      // ... error handler
  })

  const pool2 = new sql.ConnectionPool(sql.config, err => {
      // ... error checks

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
  res.send("Helloworlde Data !");
});

app.listen(3001);
