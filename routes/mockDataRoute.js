const { Router } = require("express");
const mockDataController = require('../controller/mockDataController');
const mockDataRouter = Router();

mockDataRouter.get('/fetchApexMockData',mockDataController.get.fetchMockData);
mockDataRouter.post('/createApexMockData',mockDataController.post.createMockData);

module.exports = mockDataRouter