
exports.up = knex => knex.raw(`
  create view guests as
    select * from party
    natural join party_user
    natural join user
`);

exports.down = knex => knex.raw("drop view guests");
