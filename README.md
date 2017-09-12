Zero Waste Interface API

API

Host `zerowaste.ucsc.edu`

 = {
  'secret': '',
  // mongoDB
  'mongodb_host': '',
  'mongodb_user': '',
  'mongodb_password': '',
  // mssql DB
  'mssql_ip': '',
  'mssql_user': '',
  'mssql_pass': '',
  'mssql_database': ''
};


## API endpoints
http://zerowaste.ucsc.edu:3001/api/2017/spring
http://zerowaste.ucsc.edu:3001/api/2017/fall
http://zerowaste.ucsc.edu:3001/api/days/15
http://zerowaste.ucsc.edu:3001/api/days/30
http://zerowaste.ucsc.edu:3001/api/days/45
http://zerowaste.ucsc.edu:3001/api/days/60

## Server Details
- express server, MSsql
- queries using Transact-SQL

## Running the server
`ssh kp@zerowaste.ucsc.edu`<br/>
password: `##########`<br/>
`cd ZeroWasteAPI`<br/>

- Update the UCSC files with the latest master version<br/>
git pull`
- Find the running processes<br/>
ps aux | grep "node"` or ps aux | grep "node API_server.js"`
- Kill the running processes<br/>
`kp 13996  4.8  0.7  69788 33280 pts/10   Sl   May14   0:00 node APIserver.js`<br/>
`kill 13996`
- Or do the last two in one step (careful because this will kill all processes with this name)<br/>
`pkill -f "node API_server.js"`
- Restart the Interface by running ('nohup' and '&' mean the server will run in the background)<br/>
`nohup node serve.js &`


      schema:
      [
       {
         PickupTime: "2017-08-09T00:13:00.000Z",
         Year_Month: "2017-08",
         Month_Num: 8,
         Week_Num: "2017-32",
         LoadmanAcct: 907,
         LoadName: "RR-CMK-OR",
         LoadName_Split: "RR-CMK-OR",
         Product: "Compost",
         Diversion_Type: "Diverted",
         ContainerType: "Roll Off",
         Size_CY: 20,
         Location: "Crown/Merrill Kitchen",
         Location_Type: "Dining",
         Load_Split: 12120
       },
       ...
     ]


      Error response:
      {
        code: "EREQUEST",
        number: 2812,
        lineNumber: 1,
        state: 62,
        class: 16,
        serverName: "PP-PROD-DB-1",
        procName: "",
        originalError: {
          info: {
          number: 2812,
          state: 62,
          class: 16,
          message: "Could not find stored procedure 'S'.",
          serverName: "PP-PROD-DB-1",
          procName: "",
          lineNumber: 1,
          name: "ERROR",
          event: "errorMessage"
          }
        },
        name: "RequestError",
        precedingErrors: [ ]
      }
