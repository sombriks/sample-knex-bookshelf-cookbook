// create pivot party_user
exports.up = knex =>
  knex.schema.createTable("party_user", tb => {
    tb.integer("party_id")
      .notNullable()
      .references("party.party_id")
      .onDelete("cascade");
    tb.integer("user_id")
      .notNullable()
      .references("user.user_id")
      .onDelete("cascade");
    tb.unique(["party_id", "user_id"]);
  });

exports.down = knex => knex.schema.dropTable("party_user");
