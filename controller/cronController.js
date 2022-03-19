const cronModel=require('../models/cronModel')

module.exports = {
    post:{
        cronJob:async(req,res)=>{
            try {
                let data = await cronModel.findOne({}).lean();
                console.log(data)
                if(data===null){
                    let temp = {
                        count:0,
                        cronEvent:'create'
                    }
                    let savedData = await cronModel.create(temp);
                    console.log('cron job executed successfully to create');
                }else{
                    data.count = parseInt(data.count) + 1;
                    data.cronEvent = 'update';
                    let updateData = await cronModel.findOneAndUpdate(data);
                    console.log('cron job executed successfully to update');
                }
            } catch (err) {
                console.log(err.name)
                console.log(err.message)
            }
        }   
    }
}