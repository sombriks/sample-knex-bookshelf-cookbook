
exports.up = knex => knex.schema.table("user", tb => {
  tb.date("user_birthdate")
})

exports.down = knex => knex.schema.table("user", tb => {
  tb.dropColumn("user_birthdate")
})
