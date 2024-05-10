const express = require('express');
const sql = require('mssql');

const app = express();

const config = {
    user: 'admin1',
    password: 'adminadmin1',
    server: 'PBGM7E',
    database: 'db_Gauge_Inventory',
    options: {
        trustServerCertificate: true,
        trustedConnection: true
    },
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};
// Test connect Open line 22 nah and comment 51 till end set port dee dee and
// if can connect database if you know you know 
// app.get('/', function (req, res) {
//     sql.connect(config, function (err) {
//         if (err) {
//             console.log("Error connecting to database:", err);
//             return res.status(500).send("Error connecting to database");
//         }

//         var request = new sql.Request();

//         request.query('select ModelSpec_Name from [master].[tb_Model_Spec]', function (err, recordset) {
//             if (err) {
//                 console.log("Error executing query:", err);
//                 sql.close();
//                 return res.status(500).send("Error executing query");
//             }

//             sql.close();

//             // Extracting necessary information from recordset
//             const models = recordset.recordset.map(record => record.ModelSpec_Name);

//             res.send(models);
//         });
//     });
// });

// const server = app.listen(5000, function () {
//     console.log('Server is running on port 5000');
// });
const poolPromise = new sql.ConnectionPool(config)
    poolPromise.connect(err => {
        if (err) {
            console.log(err);
        } else {
            console.log('connected')
            return poolPromise
        }
    })

    module.exports(poolPromise,sql);