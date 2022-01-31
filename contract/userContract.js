const Joi = require("joi");

let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

exports.userRegistrationContract = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().regex(pattern).required(),
});

exports.userLoginContract = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().regex(pattern).required(),
});

