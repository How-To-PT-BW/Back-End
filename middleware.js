const jwt = require('jsonwebtoken')

module.exports = {
    validateToken,
    validatePost
}

function validateToken(req,res,next) {
    const token = req.headers.authorization
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            if(err) {
                res.status(401).json({message: 'Token not valid'})
            }else{
                req.user = decodedToken
                next()
            }
        })
    }else {
        res.status(400).json({message: 'No auth token provided'})
    }
}

function validatePost(req,res,next) {
    if(req.user.allowPost) {
        next()
    }else{
        res.status(400).json({message: 'User does not have posting or editing access'})
    }
}