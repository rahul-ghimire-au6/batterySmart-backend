const { Router } = require("express");
const formController = require('../controller/formController');
const formRouter = Router();
const {withAuth} = require('../middleware/auth')
const {validateCreateFormDataContract} = require('../middleware/validate')
const {createFormDataContract} = require('../contract/formContract')

formRouter.get('/fetchFormData',formController.get.fetchFormData)
formRouter.post('/addFormData',withAuth,validateCreateFormDataContract(createFormDataContract),formController.post.createFormData);
formRouter.delete('/deleteFormData/:formDataId',formController.delete.deleteFormData)
module.exports = formRouter