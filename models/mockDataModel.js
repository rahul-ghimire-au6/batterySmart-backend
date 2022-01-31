const { dbSelect,POSTGRES_USERNAME,POSTGRES_PASS } = process.env;


if(dbSelect==='mongodb'){
const mongoose = require('mongoose')

const Schema = mongoose.Schema;
let mockDataSchema = new Schema({
    name:{type:String,trim:true,required:true},
    data:{type:Array,trim:true,required:true},
}, { timestamps: true });
const MockData = mongoose.model('mockData', mockDataSchema)
module.exports = MockData
}else{
    const { Sequelize, Model, DataTypes } = require("sequelize");
    const sequelize = new Sequelize(`postgres://${POSTGRES_USERNAME}:${POSTGRES_PASS}@arjuna.db.elephantsql.com/${POSTGRES_USERNAME}`);
    class MockData extends Model {}
    MockData.init(
      {
        name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        data: {
          type: DataTypes.NUMBER,
          allowNull: false,
        },
        createdAt: { type: DataTypes.DATE },
        updatedAt: { type: DataTypes.DATE },
      },
      {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: "mockData", // We need to choose the model name
      }
    );
    console.log(MockData === sequelize.models.mockData);
    module.exports = MockData;
}
