'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'John',
        lastname: 'Doe',
        email: 'john@email.com',
      },
      {
        name: 'Henrique',
        lastname: 'Mitsuo',
        email: 'henrique@email.com',
      },
      {
        name: 'Lucas',
        lastname: 'Ramos',
        email: 'lucas@email.com',
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
