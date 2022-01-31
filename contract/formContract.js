const Joi = require("joi").extend(require('@joi/date'));


exports.createFormDataContract = Joi.object({
    name: Joi.string().min(3).required(),
    criteria: Joi.string().required(),
    value: Joi.number().required(),
    days: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }),
    phone: Joi.string().min(10).max(10).required()
});