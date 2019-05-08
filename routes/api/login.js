const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/', (req, res) => {
    // Fake user
    const user ={
        id: 1,
        name: "Henrique",
        email: "henrique@email.com"
    }

    jwt.sign({user}, 'secretkey', (err, token) => {
        res.json({token});
    });
});

module.exports = router;