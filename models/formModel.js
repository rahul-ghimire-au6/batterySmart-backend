const { dbSelect,POSTGRES_USERNAME,POSTGRES_PASS } = process.env;


if(dbSelect==='mongodb'){
const mongoose = require('mongoose')

const Schema = mongoose.Schema;
let formSchema = new Schema({
    userId:{type:Schema.Types.ObjectId,trim:true,ref:"users",required:true},
    name:{type:String,trim:true,required:true},
    criteria:{type:String,trim:true,required:true},
    value:{type:Number,trim:true,required:true},
    days:{type:String,trim:true,required:true},
    email:{type:String,trim:true,required:true},
    phone:{type:String,trim:true,required:true}
}, { timestamps: true });
const FormData = mongoose.model('formData', formSchema)
module.exports = FormData
}else{
    const { Sequelize, Model, DataTypes } = require("sequelize");
    const sequelize = new Sequelize(`postgres://${POSTGRES_USERNAME}:${POSTGRES_PASS}@arjuna.db.elephantsql.com/${POSTGRES_USERNAME}`);
    class FormData extends Model {}
    FormData.init(
      {
        userId: {
          type: DataTypes.NUMBER,
          allowNull: false,
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        criteria: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        value: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        days: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
          },
        phone: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        createdAt: { type: DataTypes.DATE },
        updatedAt: { type: DataTypes.DATE },
      },
      {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: "formData", // We need to choose the model name
      }
    );
    console.log(FormData === sequelize.models.formData);
    module.exports = FormData;
}
