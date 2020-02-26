
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()
        tbl.string('username').notNullable().unique()
        tbl.string('password').notNullable()
        tbl.string('email').unique()
        tbl.text('bio')
        tbl.boolean('allowPost').defaultTo(false)
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
};
