const mongoose = require("mongoose");
const Joi = require("joi");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: {
      type: String,
      min: 3,
      max: 250,
      required: true
    },
    email: {
      type: String,
      min: 6,
      max: 250,
      required: true,
      unique: true
    },
    password: {
      type: String,
      min: 3,
      max: 1024,
      required: true
    }
  })
);

function validateUser(user) {
  const schema = {
    name: Joi.string()
      .min(3)
      .max(250)
      .required(),
    email: Joi.string()
      .min(6)
      .max(250)
      .email()
      .required(),
    password: Joi.string()
      .min(3)
      .max(250)
      .required()
  };
  return Joi.validate(user, schema);
}

module.exports = {
  User,
  validate: validateUser
};