var connection = require('../database/db')

const table = 'products'

async function find() {
  const db = await connection()
  const result = await db.query(`SELECT * FROM ${table}`)
  await db.end()

  return result
}

async function findOne(params) {
  const db = await connection()
  const result = await db.query(`SELECT * FROM ${table} WHERE ?`, params)
  await db.end()

  return result[0]
}

async function create(params) {
  const db = await connection()
  const result = await db.query(`INSERT INTO ${table} SET ?`, params)
  await db.end()

  return result
}

async function update(id, params, returning = { new: false }) {
  const db = await connection()
  const result = await db.query(`UPDATE ${table} SET ? WHERE ID=${id}`, params)
  if (returning.new) {
    const updated = await this.findOne({ id: id })
    result.item = updated
  }
  await db.end()

  return result
}

async function destroy(id) {
  const db = await connection()
  const result = await db.query(`DELETE FROM ${table} WHERE ID=${id}`)
  await db.end()

  return result
}

module.exports = { find, findOne, create, update, destroy }