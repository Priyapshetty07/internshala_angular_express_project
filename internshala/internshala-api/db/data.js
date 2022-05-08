var mysql = require('mysql2');
let mysqlConnect = function () {

    return mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'Internshala_project',
        insecureAuth: true
    });

};
module.exports.localConnect = mysqlConnect;