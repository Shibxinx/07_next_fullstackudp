const mysql = require('mysql2')
export const mysqlPool = mysql.createPool({
    host:'localhost',
    user:'u6800586',
    password:'Me220625.',
    database:'u6800586_csc350'
})