const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {

          username: 'admin',
          password: bcrypt.hashSync('password', 4),
          email: 'admin@how-to.com',
          bio: 'Admin for the how to back end',
          allowPost: true
        }
      ]);
    });
};
