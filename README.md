# Zero Waste API

## Server Details
- Express server, MSsql
- Queries using Transact-SQL
- Config details are located in .bash_profile

      config = {
        server: process.env.MSSQL_IP,
        user: process.env.MSSQL_USER,
        password: process.env.MSSQL_PASS,
        database: process.env.MSSQL_DATABASE
      };

## API endpoints
http://zerowaste.ucsc.edu:3001/api/2017/spring<br/>
http://zerowaste.ucsc.edu:3001/api/2017/fall<br/>
http://zerowaste.ucsc.edu:3001/api/days/15<br/>
http://zerowaste.ucsc.edu:3001/api/days/30<br/>
http://zerowaste.ucsc.edu:3001/api/days/45<br/>
http://zerowaste.ucsc.edu:3001/api/days/60<br/>

## Setting up the Server
- Remote into the UCSC server<br/>
`~/$ ssh kp@zerowaste.ucsc.edu`<br/>
`~/$ password: ########`<br/>
`~/$ cd ZeroWasteAPI`<br/>
- Update the UCSC files with the latest master version<br/>
`~/$ git pull`
- Find the running processes<br/>
`~/$ ps aux | grep "node"` or `~/$ ps aux | grep "node APIserver.js"`
- Kill the running processes<br/>
`kp #####  4.8  0.7  69788 33280 pts/10   Sl   May14   0:00 node APIserver.js`<br/>
`~/$ kill #####`
- Or do the last two in one step (careful because this will kill all processes with this name)<br/>
`~/$ pkill -f "node APIserver.js"`
- Start Server by running ('nohup' and '&' mean the server will run in the background)<br/>
`~/$ nohup node serve.js &`


### Schema:
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

### Error response:
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
