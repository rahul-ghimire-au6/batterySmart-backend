const { dbSelect,POSTGRES_USERNAME,POSTGRES_PASS } = process.env;

if (dbSelect === "mongodb") {
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
let userSchema = new Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, unique: true, required: true },
    password: { type: String, trim: true, required: true },
  },
  { timestamps: true }
);
const User = mongoose.model("users", userSchema);
module.exports = User;
 } 
else {
  const { Sequelize, Model, DataTypes } = require("sequelize");
  const sequelize = new Sequelize(`postgres://${POSTGRES_USERNAME}:${POSTGRES_PASS}@arjuna.db.elephantsql.com/${POSTGRES_USERNAME}`);
  class User extends Model {}
    User.init(
    {
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: { type: DataTypes.DATE },
      updatedAt: { type: DataTypes.DATE },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: "users", // We need to choose the model name
    }
  );
  console.log(User === sequelize.models.users);
  module.exports = User;
}


