const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

// var mysql = require('mysql');
// var pool  = mysql.createPool({
//   connectionLimit : 10,
//   host            : 'example.org',
//   user            : 'bob',
//   password        : 'secret',
//   database        : 'user_db'
// });

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;