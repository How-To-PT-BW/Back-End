const db = require('../data/dbConfig')

module.exports = {
    find,
    findByUserId,
    findInstructionsByHowToId,
    findById,
    findByInstructionId,
    insert,
    insertInstructions,
    update,
    updateInstructions,
    remove
}

function find() {
    return db('how_to')
}

function findById(id) {
    return db('how_to').where({ id })
        .then(([data]) => data)
}

function findByUserId(user_id) {
    return db('how_to').where({ user_id }) 
           
}

function findInstructionsByHowToId(how_to_id) {
    return db('instructions').where({ how_to_id })
}

function findByInstructionId(id) {
    return db('instructions').where({ id })
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