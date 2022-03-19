const { dbSelect } = process.env;

if(dbSelect==='mongodb'){
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
let cronJobSchema = new Schema({
    count:{type:Number,trim:true,required:true},
    cronEvent:{type:String,trim:true,required:true}
}, { timestamps: true });
const cronData = mongoose.model('cronJobData', cronJobSchema)
module.exports = cronData
}
