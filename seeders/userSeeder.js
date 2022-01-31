module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('users', [{
          name: 'rahul',
          email: 'ghimirerahul@gmail.com',
          password: '$2b$10$k9.Zr5vimBzRZCVr8lvCWeuw6ZJBkUPY5p.39s7n.epi3W/0McIya',
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
    },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('users', null, {});
    }
  };