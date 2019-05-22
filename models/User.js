const sequelize = require('sequelize');
const db = require('../config/database');

const User = db.define('user', {
    name: {
        type: sequelize.STRING,
    },
    lastname: {
        type: sequelize.STRING,
    },
    email: {
        type: sequelize.STRING,
    }
})

module.exports = User;