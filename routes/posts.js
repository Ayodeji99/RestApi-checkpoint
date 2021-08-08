const express = require('express');

const router = express.Router();
const User = require('../models/User')


// RETURN ALL USERS
router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)

    }catch(error) {
        res.json({ message: error})
    }
})

// router.get('/specific', (req, res) => {
//     res.send('Specific posts')
// })


// ADD A NEW USER TO THE DATABASE
router.post('/', async (req, res) => {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
        Email: req.body.email, 
    });
    try {
    const savedUser = await user.save()
    res.json(savedUser);
    } catch(error) {
        res.json({ message: error})
    }
    
})

// SPECIFIC USER UPDATE
router.get('/:userId', async (req, res) => {
    try{
    const user = await User.findById(req.params.userId) ;
    res.json(user);
    } catch(error) {
        res.json({ message: error})
    }
})

//DELETE A USER

router.delete('/:userId', async (req, res) => {
    try{
       const removedUser = await User.remove({_id: req.params.userId})
       res.json(removedUser)

    }catch(error) {
        res.json({ message: error })

    }
})

// UPDATE A USER
router.patch('/:userId', async (req, res) => {
    try{
        const updatedUser = await User.updateOne(
            {_id: req.params.userId}, 
            {$set: {name: req.body.name}})
        res.json(updatedUser)
    }catch(error) {
        res.json({ message: error })
    }
})

// EDIT A USER BY ID
router.put('/:userId', async (req, res) => {
    try{
        const editedUser = await User.put(
            {_id: req.params.userId}, 
            {$set: {name: req.body.name}},
            {$set: {age: req.body.age}},
            {$set: {Email: req.body.email}})
        res.json(editedUser)
    }catch(error) {
        res.json({ message: error })
    }
})

module.exports = router;
