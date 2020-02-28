const server = require('../server')
const request = require('supertest')
const db = require('../data/dbConfig')

beforeEach(() => {
    return db.migrate.rollback()
        .then(() => db.migrate.latest())
        .then(() => db.seed.run())
})

describe('Get all How-To from database', () => {
    it('GET /how-to', async () =>{
        const res = await request(server)
            .get('/how-to')
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body[0]).toHaveProperty('id')
        expect(res.body[0]).toHaveProperty('problem')
        expect(res.body[0]).toHaveProperty('solution')
        expect(res.body[0]).toHaveProperty('user_id')
        expect(res.body).toHaveLength(2)
        expect(res.body[0]).toMatchObject({title: 'Crochet a Baby Yoda'})
    })
})

describe('Get How-To by id', () => {
    it('GET /how-to/:id', async () =>{
        const res = await request(server)
            .get('/how-to/1')
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('problem')
        expect(res.body).toHaveProperty('solution')
        expect(res.body).toHaveProperty('user_id')
        expect(res.body.instructions).toHaveLength(4)
        expect(res.body).toMatchObject({title: 'Crochet a Baby Yoda'})
    })
})

describe('Get How-To by user', () => {
    it('GET /how-to/user/:id', async () =>{
        const res = await request(server)
            .get('/how-to/user/1')
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body[0]).toHaveProperty('id')
        expect(res.body[0]).toHaveProperty('problem')
        expect(res.body[0]).toHaveProperty('solution')
        expect(res.body[0]).toHaveProperty('user_id')
        expect(res.body).toHaveLength(2)
        expect(res.body[0]).toMatchObject({title: 'Crochet a Baby Yoda'})
    })
})

describe('Get How-To instructions by id', () => {
    it('GET /how-to/instructions/:id', async () =>{
        const res = await request(server)
            .get('/how-to/instructions/1')
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body[0]).toHaveProperty('id')
        expect(res.body[0]).toHaveProperty('description')
        expect(res.body[0]).toHaveProperty('how_to_id')
        expect(res.body[0]).toHaveProperty('step_number')
        expect(res.body[0]).toHaveProperty('step_title')
        expect(res.body[0]).toMatchObject({step_title: 'Body'})
    })
})