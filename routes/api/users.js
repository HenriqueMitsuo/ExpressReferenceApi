const express = require('express');
const uuid = require('uuid');
const router = express.Router();

const users = require('../../Users');

// API USERS

// GET All users
router.get('/', (req, res) => {
    res.json(users);
});

// GET Single user
// :id => parametro
router.get('/:id', (req, res) => {
    // req.params.id => acessa o parametro enviado
    // res.send(req.params.id);
    let id = parseInt(req.params.id);
    const found = users.some(user => user.id === id)
    if (found) {
        res.json(users.filter(user => user.id === id));
    }
    else {
        res.status(400).json({ msg: `User ${req.params.id} not found` });
    }
});

// POST Create User
router.post('/', (req, res) => {
    // res.send(req.body);
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        username: req.body.username,
        email: req.body.email
    }

    if(!newUser.name || !newUser.email){
        res.status(400).json({msg: "Please fill name and email"});
    }
    else{
        users.push(newUser);
        res.json(users);
    }
});

// PUT Update User
router.put('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    const found = users.some(user => user.id === id)
    if (found) {
        const updUser = req.body;
        users.forEach(user => {
            if(user.id === id){
                user.name = updUser.name ? updUser.name : user.name;
                user.username = updUser.username ? updUser.username : user.username;
                user.email = updUser.email ? updUser.email : user.email;

                res.json({msg: 'User updated', user});
            }
        });
    }
    else {
        res.status(400).json({ msg: `User ${req.params.id} not found` });
    }
});

// DELETE Delete user
router.delete('/:id', (req, res) => {
    let id = parseInt(req.params.id);
    const found = users.some(user => user.id === id)
    if (found) {
        res.json({msg: `User with id: ${id} deleted`, user: users.filter(user => user.id !== id)});
    }
    else {
        res.status(400).json({ msg: `User ${req.params.id} not found` });
    }
});

module.exports = router;