const mysql = require('mysql2');

export const mysqlPool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'u6800586',
  password: process.env.DB_PASS || 'Me220625',
  database: process.env.DB_NAME || 'u6800586_csc350',
  port: Number(process.env.DB_PORT || 3306),
  waitForConnections: true,
  connectionLimit: 10,
  ssl: process.env.DB_SSL === 'true' ? { minVersion: 'TLSv1.2', rejectUnauthorized: true } : undefined,
});








//const mysql = require('mysql2')
//export const mysqlPool = mysql.createPool({
  //  host:'localhost',
    //user:'u6800586',
    //password:'Me220625.',
    //database:'u6800586_csc350'
//})