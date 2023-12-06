import mysql from 'mysql2';
import mysqlConnection from './dbConfig.js';

// create the connection to database
const connection = mysql.createConnection(mysqlConnection);

// simple query
// connection.query(
//     'SELECT * FROM `discovery_methods` WHERE `id` LIKE "t%"',
//     function (err, results, fields) {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(results); // results contains rows returned by server
//             console.log(fields); // fields contains extra meta data about results, if available
//         }
//     }
// );

// with placeholder == prepared statement
connection.query(
    'SELECT * FROM `discovery_methods` WHERE `id` LIKE ?',
    ['t%'],
    function (err, results) {
        console.log(results);
    }
);