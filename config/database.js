const Sequelize = require('sequelize');

module.exports = new Sequelize('sequelize_traversy', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        // The `timestamps` field specify whether or not the `createdAt` and `updatedAt` fields will be created.
        // This was true by default, but now is false by default
        timestamps: false,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});