const express = require('express');
const jwt = require('jsonwebtoken');
const verifytoken = require('../../middleware/verifytoken');
const router = express.Router();

router.post('/', verifytoken, (req, res) => {
    jwt.verify(req.token, 'secretkey', { expiresIn: '24 h' }, (err, authData) => {
        if(err){
            res.sendStatus(403);
        }
        else{
            res.json({
                msg: 'Post created with login',
                authData
            });
        }
    });

});

module.exports = router;