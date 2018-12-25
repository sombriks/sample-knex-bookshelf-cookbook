exports.up = knex =>
  knex.schema.createTable("party", tb => {
    tb.increments("party_id");
    tb.timestamp("party_dtcreation")
      .notNullable()
      .defaultTo(knex.fn.now());
    tb.string("party_name").notNullable();
    tb.integer("user_id").references("user.user_id");
  });

exports.down = knex => knex.schema.dropTable("party");
