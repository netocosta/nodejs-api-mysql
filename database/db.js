const mysql = require('promise-mysql')

async function connect() {
  return await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'projeto-api'
  })
}

module.exports = connect