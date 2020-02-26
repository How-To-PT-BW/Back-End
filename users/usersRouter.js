const router = require('express').Router()
const db = require('./usersModal')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', (req,res) => {
    const user = req.body
    !user.username || !user.password ?
        res.status(403).json({message: 'Please provide a username and a password'}) :
    db.insert({...user, password: bcrypt.hashSync(user.password, 4)})
        .then(userId => {
            db.findById(userId)
                .then(user => {
                    const token = generateToken(user)
                    const {id, username, email, bio, allowPost} = user
                    res.status(201).json({message: `Successfully created user ${username}`, 
                        id, token, username, email, bio, allowPost})
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({message:'unable to register user', err})
                })
        })

})

router.post('/login', (req,res) => {
    const { username, password } = req.body
    !username || !password ?
        res.status(403).json({message: 'Please provide a username and password'}) :
    db.findByUsername(username)
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user)
                const {id, username, email, bio, allowPost} = user
                    res.status(200).json({message: `Successfully logged in user ${username}`, 
                        id, token, username, email, bio, allowPost})
            }else{
                res.status(403).json({message: 'Invalid username or password'})
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'Unable to register user', err})
        })
})


function generateToken(user) {
    const payload = {
        username: user.username,
        id: user.id,
        allowPost: user.allowPost
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, process.env.JWT_SECRET, options)
}


module.exports = router