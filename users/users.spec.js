const server = require('../server')
const request = require('supertest')
const db = require('../data/dbConfig')

beforeEach(() => {
    return db.migrate.rollback()
        .then(() => db.migrate.latest())
        .then(() => db.seed.run())
})

describe('Register a new user', () => {
    it('POST /users/register', async () =>{
        const res = await request(server)
            .post('/users/register')
            .send({username: 'chris', password: 'taco'})
        expect(res.status).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('token')
        expect(res.body).toMatchObject({message: 'Successfully created user chris'})
    })
})

describe('Register a new user with posting priveledge', () => {
    it('POST /users/register', async () =>{
        const res = await request(server)
            .post('/users/register')
            .send({username: 'chris', password: 'taco', allowPost: true})
        expect(res.status).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('token')
        expect(res.body).toMatchObject({message: 'Successfully created user chris'})
        expect(res.body).toMatchObject({allowPost: true})
    })
})

describe('Login a user', () => {
    it('POST /users/login', async () =>{
        const register = await request(server)
            .post('/users/register')
            .send({username: 'chris', password: 'taco'})
        const res = await request(server)
            .post('/users/login')
            .send({username: 'chris', password: 'taco'})
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('token')
        expect(res.body).toMatchObject({message: 'Successfully logged in user chris'})
    })
})

describe('Add a new How To', () => {
    it('POST /how-to', async () =>{
        const register = await request(server)
            .post('/users/register')
            .send({username: 'chris', password: 'taco', allowPost: true})
        const res = await request(server)
            .post('/how-to')
            .send({
                title : "testing api",
                problem: "hoping it works",
                solution: "it should work fine",
                topic: "maybe",
                user_id: 1
            })
            .set('authorization', register.body.token)
        expect(res.status).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('liked')
        expect(res.body).toHaveProperty('problem')
        expect(res.body).toHaveProperty('solution')
        expect(res.body).toHaveProperty('title')
        expect(res.body).toHaveProperty('topic')
        expect(res.body).toHaveProperty('user_id')
        expect(res.body).toMatchObject({message: 'successfully added new how to'})
    })
})

describe('Add a new instruction to how to', () => {
    it('POST /how-to/instructions', async () =>{
        const register = await request(server)
            .post('/users/register')
            .send({username: 'chris', password: 'taco', allowPost: true})
        const res = await request(server)
            .post('/how-to/instructions')
            .send({
                how_to_id: 1,
                step_title: "hoping it works",
                description: "it should work fine",
                step_number: 5
            })
            .set('authorization', register.body.token)
        expect(res.status).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('description')
        expect(res.body).toHaveProperty('how_to_id')
        expect(res.body).toHaveProperty('step_number')
        expect(res.body).toHaveProperty('step_title')
        expect(res.body).toMatchObject({message: 'successfully added new instruction'})
    })
})

describe('Edit existing How To', () => {
    it('PUT /how-to/:id', async () =>{
        const register = await request(server)
            .post('/users/register')
            .send({username: 'chris', password: 'taco', allowPost: true})
        const createHowTo = await request(server)
            .post('/how-to')
            .send({
                title : "testing api",
                problem: "hoping it works",
                solution: "it should work fine",
                topic: "maybe",
                user_id: 2
            })
            .set('authorization', register.body.token)
        const res = await request(server)
            .put('/how-to/3')
            .send({
                title : "testing api 2",
                problem: "hoping it works 2",
                solution: "it should work fine 2",
                topic: "maybe 2",
                user_id: 2
            })
            .set('authorization', register.body.token)
        expect(res.status).toBe(203)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveProperty('updated')
        expect(res.body.updated).toHaveProperty('id')
        expect(res.body.updated).toHaveProperty('liked')
        expect(res.body.updated).toHaveProperty('problem')
        expect(res.body.updated).toHaveProperty('solution')
        expect(res.body.updated).toHaveProperty('title')
        expect(res.body.updated).toHaveProperty('topic')
        expect(res.body.updated).toHaveProperty('user_id')
        expect(res.body.updated).toMatchObject({title: 'testing api 2'})
        expect(res.body.updated).toMatchObject({problem: 'hoping it works 2'})
        expect(res.body.updated).toMatchObject({solution: 'it should work fine 2'})
        expect(res.body.updated).toMatchObject({topic: 'maybe 2'})
        expect(res.body).toMatchObject({message: 'successfully updated'})
    })
})

describe('Edit existing instruction', () => {
    it('PUT /how-to/instructions/:id', async () =>{
        const register = await request(server)
            .post('/users/register')
            .send({username: 'chris', password: 'taco', allowPost: true})
        const createInstruction = await request(server)
            .post('/how-to/instructions')
            .send({
                how_to_id: 1,
                step_title: "hoping it works",
                description: "it should work fine",
                step_number: 5
            })
            .set('authorization', register.body.token)
        const res = await request(server)
            .put('/how-to/instructions/9')
            .send({
                step_title: "hoping it works 2",
                description: "it should work fine 2",
                step_number: 6
            })
            .set('authorization', register.body.token)
        expect(res.status).toBe(203)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveProperty('updated')
        expect(res.body.updated[0]).toHaveProperty('description')
        expect(res.body.updated[0]).toHaveProperty('how_to_id')
        expect(res.body.updated[0]).toHaveProperty('id')
        expect(res.body.updated[0]).toHaveProperty('step_number')
        expect(res.body.updated[0]).toHaveProperty('step_title')
        expect(res.body.updated[0]).toMatchObject({step_number: 6})
        expect(res.body.updated[0]).toMatchObject({step_title: 'hoping it works 2'})
        expect(res.body.updated[0]).toMatchObject({description: 'it should work fine 2'})
        expect(res.body).toMatchObject({message: 'successfully updated'})
    })
})

describe('Delete existing How To', () => {
    it('DELETE /how-to/:id', async () =>{
        const register = await request(server)
            .post('/users/register')
            .send({username: 'chris', password: 'taco', allowPost: true})
        const createHowTo = await request(server)
            .post('/how-to')
            .send({
                title : "testing api",
                problem: "hoping it works",
                solution: "it should work fine",
                topic: "maybe",
                user_id: 2
            })
            .set('authorization', register.body.token)
        const res = await request(server)
            .delete('/how-to/3')
            .set('authorization', register.body.token)
        expect(res.status).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body).toMatchObject({message: 'successfully removed'})
    })
})