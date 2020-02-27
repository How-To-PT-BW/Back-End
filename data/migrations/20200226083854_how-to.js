
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()
        tbl.string('username').notNullable().unique()
        tbl.string('password').notNullable()
        tbl.string('email').unique()
        tbl.text('bio')
        tbl.boolean('allowPost').defaultTo(false)
    })
    .createTable('how_to', tbl => {
        tbl.increments()
        tbl.string('title').notNullable()
        tbl.string('problem').notNullable()
        tbl.integer('liked')
        tbl.text('solution').notNullable()
        tbl.string('topic')
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
    .createTable('instructions', tbl => {
        tbl.increments()
        tbl.integer('step_number').notNullable()
        tbl.string('step_title').notNullable()
        tbl.text('description').notNullable()
        tbl.integer('how_to_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('how_to')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('how_to')
        .dropTableIfExists('users')
};
