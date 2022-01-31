module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('formData', [{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:1,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:2,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:3,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 4,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:0,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:5,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:6,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:7,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:8,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:9,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:10,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:11,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:12,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:13,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:14,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:15,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:16,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:17,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:18,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:19,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          userId: 1,
          name: 'Test Alert',
          criteria: 'Less Than',
          value:20,
          days: "Sun, Mon, Tue, Wed, Thu, Fri, Sat",
          email:'ghimirerahul@gmail.com',
          phone:7030665933,
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
    },
  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('formData', null, {});
    }
  };