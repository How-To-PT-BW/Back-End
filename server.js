const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const userRouter = require('./users/usersRouter')
const howToRouter = require('./howTo/howToRouter')


const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/users', userRouter)
server.use('/how-to', howToRouter)

server.get('/', (req,res) => {
    res.status(200).json({message: 'Welcome to the How-To Api'})
})

module.exports = server