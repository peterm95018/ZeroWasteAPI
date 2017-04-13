var express = require('express');
var app = express();

app.get('/db.json', function(req, res){

    var sql = require("mssql");
    var config = {
        server: process.env.MSSQL_IP, 
        user: process.env.MSSQL_USER,
        password: process.env.MSSQL_PASS,
        database: process.env.MSSQL_DATABASE 
    };
	const pool1 = new sql.ConnectionPool(config, err => {
	    // ... error checks

	    // Query

	    pool1.request() // or: new sql.Request(pool1)
	    .query('SELECT * FROM (SELECT *, ROW_NUMBER() OVER (ORDER BY Record) as row FROM ExportLoadData) a WHERE row > 1 and row <= 100', (err, result) => {
		// ... error checks

		res.send(result);
	    })

	})

	pool1.on('error', err => {
	    // ... error handler
	})

	const pool2 = new sql.ConnectionPool(config, err => {
	    // ... error checks

	    // Stored Procedure

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
