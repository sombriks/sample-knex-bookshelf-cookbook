const payload = [
  {
    user_name: "Alice",
    user_password: "123456",
    user_email: "alice2018@foobar.com"
  },
  {
    user_name: "Bob",
    user_password: "123456",
    user_email: "bob2018@foobar.com"
  },
  {
    user_name: "Joe",
    user_password: "123456",
    user_email: "joe2018@foobar.com"
  },
  {
    user_name: "Mary",
    user_password: "123456",
    user_email: "mary2018@foobar.com"
  }
];

exports.up = knex => knex("user").insert(payload);

exports.down = knex =>
  knex("user")
    .del()
    .whereIn("user_email", payload.map(e => e.user_email));
