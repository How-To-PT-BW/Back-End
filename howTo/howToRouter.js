const router = require('express').Router()
const db = require('./howToModal')
const jwt = require('jsonwebtoken')

router.get('/', (req,res) => {
    db.find()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to get how to'})
        })
})

router.get('/:id', (req,res) => {
    db.findById(req.params.id)
        .then(data => {
            const howTo = data
            // res.status(200).json(howTo)
            db.findInstructionsByHowToId(howTo.id)
                .then(instructions => {
                    res.status(200).json({
                        ...howTo, instructions: instructions
                    })
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({message: 'unable to get instructions for how-to'})
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to find how-to'})
        })
})
router.get('/user/:id', (req,res) => {
    db.findByUserId(req.params.id)
        .then(user => {
            user[0] ?
            res.status(200).json(user) :
            res.status(403).json({message: 'user has no active how-to posts'})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to get user how-to'})
        })
})

router.get('/instructions/:id', (req,res) => {
    db.findByInstructionId(req.params.id)
        .then(ins => {
            ins[0] ?
            res.status(200).json(ins) :
            res.status(403).json({message: 'instruction with the specified id does not exist'})
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to get instruction by id'})
        })
})

router.post('/', (req,res) => {
    db.insert(req.body)
        .then(data => {
            db.findById(data)
                .then(howTo => {
                    res.status(201).json({...howTo, message: 'successfully added new how to'})
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({message:'unable to get new how to'})
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to add new how to'})
        })
})

router.post('/instructions', (req,res) => {
    db.insertInstructions(req.body)
        .then(id => {
            db.findByInstructionId(id)
                .then(ins => {
                    const [newIns] = ins
                    res.status(201).json({...newIns, message: 'successfully added new instruction'})
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({message: 'unable to find new instruction'})
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to add new instruction'})
        })
})

router.put('/:id', (req,res) => {
    db.update(req.params.id, req.body)
        .then(id => {
            db.findById(req.params.id)
                .then(updated => {
                    res.status(203).json({message: 'successfully updated', updated})
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({message: 'unable to find updated how to'})
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to edit how to'})
        })
})

router.put('/instructions/:id', (req,res) => {
    db.updateInstructions(req.params.id, req.body)
        .then(id => {
            db.findByInstructionId(req.params.id)
                .then(ins => {
                    res.status(203).json({message: 'successfully updated', ins})
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json({message: 'unable to get updated instruction'})
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'unable to update instruction'})
        })
})

module.exports = router