const express = require('express')
const helmet = require('helmet')
const cors = require('cors')


const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

aerver.get('/', (req,res) => {
    res.status(200).json({message: 'Welcome to the How-To Api'})
})

module.exports = server