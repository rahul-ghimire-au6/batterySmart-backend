const {
  userRegistrationContractErrorHandler,
} = require("../contract/userContract");

exports.validateUserRegistrationContract = (schema) => {
  return async (req, res, next) => {
    try {
      const submitData = { ...req.body };
      await schema.validateAsync(submitData);
      next();
    } catch (err) {
      console.log(err.name);
      console.log(err.message);
      if (
        err.name == "ValidationError" &&
        err.details[0].path.includes("password")
      ) {
        return res
          .status(400)
          .json({
            status: "failed",
            message:
              "password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
          });
      }
      if (
        err.name == "ValidationError" &&
        err.details[0].path.includes("email")
      ) {
        return res
          .status(400)
          .json({ status: "failed", message: "please send a valid email" });
      }
      if (
        err.name == "ValidationError" &&
        err.details[0].path.includes("name")
      ) {
        return res
          .status(400)
          .json({
            status: "failed",
            message:
              "name must contain at least 3 characters and it should be string",
          });
      }

      return res.status(400).json({
        status: "failed",
        message: `err.name : ${err.name}, err.message:${err.message}`,
      });
    }
  };
};

exports.validateUserLoginContract = (schema) => {
  return async (req, res, next) => {
    try {
      const submitData = { ...req.body };
      await schema.validateAsync(submitData);
      next();
    } catch (err) {
      console.log(err.name);
      console.log(err.message);
      if (
        err.name == "ValidationError" &&
        err.details[0].path.includes("password")
      ) {
        return res
          .status(400)
          .json({
            status: "failed",
            message:
              "password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
          });
      }
      if (
        err.name == "ValidationError" &&
        err.details[0].path.includes("email")
      ) {
        return res
          .status(400)
          .json({ status: "failed", message: "please send a valid email" });
      }
      return res.status(400).json({
        status: "failed",
        message: `err.name : ${err.name}, err.message:${err.message}`,
      });
    }
  };
};  

exports.validateCreateFormDataContract = (schema)=>{
  return async (req, res, next) => {
    try {
      const submitData = { ...req.body };
      await schema.validateAsync(submitData);
      next();
    } catch (err) {
      console.log(err.name);
      console.log(err.message);
      if (err.name == "ValidationError" && err.details[0].path.includes("criteria")) {
        return res.status(400).json({status: "failed",message:"criteria is required string field"});
      }
      if (err.name == "ValidationError" && err.details[0].path.includes("email")) {
        return res.status(400).json({ status: "failed", message: "please send a valid email" });
      }
      if (err.name == "ValidationError" && err.details[0].path.includes("name")) {
        return res.status(400).json({status: "failed",message: "name must contain at least 3 characters and it should be string"});
      }
      if (err.name == "ValidationError" && err.details[0].path.includes("days")) {
        return res.status(400).json({status: "failed",message: "days must be a date with format [DD/MM/YYYY]"});
      }
      if (err.name == "ValidationError" && err.details[0].path.includes("phone")) {
        return res.status(400).json({status: "failed",message: "please send a valid phone number with 10 digits"});
      }
      if (err.name == "ValidationError" && err.details[0].path.includes("value")) {
        return res.status(400).json({status: "failed",message: "value must be numeric"});
      }
      return res.status(400).json({status: "failed",message: `err.name : ${err.name}, err.message:${err.message}`});
    }
  };
};