const db = require('../data/dbConfig')

module.exports = {
    find,
    findByUserId,
    findByHowToId,
    insert,
    insertInstructions,
    update,
    updateInstructions,
    remove
}

function find() {
    return db('how_to')
}

function findByUserId(id) {
    return db('how_to').where({ id })
        .then(([howTo]) => howTo)
}

function findByHowToId(id) {
    return db('instructions').where({ id })
        .then(([instructions]) => instructions)
}

function insert(howTo) {
    return db('how_to').insert(howTo, 'id')
        .then(([id]) => id)
}

function insertInstructions(instructions) {
    return db('instructions').insert(instructions, 'id')
        .then(([id]) => id)
}

function update(id, howTo) {
    return db('how_to').where({ id }).update(howTo)
}

function updateInstructions(id, instructions) {
    return db('instructions').where({ id }).update(instructions)
}

function remove(id) {
    return db('how_to').where({ id }).del()
}