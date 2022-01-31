
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('mockData', [{
          name: 'series1',
          data: 31,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
            name: 'series1',
            data: 40,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            name: 'series1',
            data: 28,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            name: 'series1',
            data: 51,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            name: 'series1',
            data: 42,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            name: 'series1',
            data: 109,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            name: 'series1',
            data: 100,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            name: 'series2',
            data: 11,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            name: 'series2',
            data: 32,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            name: 'series2',
            data: 45,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            name: 'series2',
            data: 32,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            name: 'series2',
            data: 34,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            name: 'series2',
            data: 52,
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            name: 'series2',
            data: 41,
            createdAt: new Date(),
            updatedAt: new Date()
          }], {});
    },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('mockData', null, {});
    }
  };



