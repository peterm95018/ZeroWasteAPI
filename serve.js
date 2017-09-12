var express = require('express');
var app = express();
var bodyParser  = require('body-parser');

// Api Router Handler
var api = express.Router();

const db1 = 'WebLoadDataSource';
const db2 = 'ExportLoadData';

//2017 Spring Quarter data (approx 60 days)
const springStart = `'2017-04-04'`;
const springEnd = `'2017-06-04'`;

const startDate = `'2017-07-04'`;
const endDate = `'2017-08-04'`;

const sqlQuery1 = `SELECT * FROM ${db1} WHERE PickupTime BETWEEN ${startDate} AND ${endDate} ORDER BY PickupTime ASC`;
const sqlQuery2 = `SELECT * FROM ${db1} WHERE PickupTime >= DATEADD(day,-200, GETDATE()) ORDER BY PickupTime ASC`;
// const sqlQuery = `SELECT * FROM (SELECT *, ROW_NUMBER() OVER (ORDER BY Record DESC) as row FROM ${db1}) a WHERE PickupTime >= DATEADD(day,-30, GETDATE())`;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

api.get('/db', function(req, res){

    var sql = require("mssql");
    sql.config = {
        server: process.env.MSSQL_IP,
        user: process.env.MSSQL_USER,
        password: process.env.MSSQL_PASS,
        database: process.env.MSSQL_DATABASE
    };
  const pool1 = new sql.ConnectionPool(sql.config, err => {
    pool1.request() // or: new sql.Request(pool1)
    .query(sqlQuery1, (err, result) => {
        res.json(result);
      });
  });

  pool1.on('error', err => {
     res.json(result);
  });

  const pool2 = new sql.ConnectionPool(sql.config, err => {
      pool2.request() // or: new sql.Request(pool2)
      .query(sqlQuery1, (err, result) => {
    // ... error checks
    });
  });

  pool2.on('error', err => {
      // ... error handler
  });
});

app.get('/', function(req, res){
  res.send("Zero Waste Api 1.0.0");
});

app.use('/api', api);
console.log(process.env);
app.listen(3001);
