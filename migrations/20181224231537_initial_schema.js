exports.up = knex =>
  knex.schema.createTable("user", tb => {
    tb.increments("user_id");
    tb.timestamp("user_dtcreation")
      .notNullable()
      .defaultTo(knex.fn.now());
    tb.string("user_name").notNullable();
    tb.string("user_password").notNullable();
    tb.string("user_email")
      .notNullable()
      .unique();
  });

exports.down = knex => knex.schema.dropTable("user");
