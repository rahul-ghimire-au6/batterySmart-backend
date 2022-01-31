const formDataModel=require('../models/formModel')
let {dbSelect} = process.env

module.exports = {
    get:{
        fetchFormData:async(req,res)=>{
            if(dbSelect==='mongodb'){
                try {
                    let userData = req.user;
                    let fetchedData = await formDataModel.find({},{createdAt:0,updatedAt:0,__v:0}).lean()
                    res.status(200).json({'status':'success','message':fetchedData})
                } catch (err) {
                    console.log(err.name);
                    console.log(err.message);
                    res.status(400).json({
                      status: "failed",
                      message: `err.name : ${err.name}, err.message:${err.message}`,
                    });  
                }
            }else{
                try {
                    let userData = req.user;
                    let fetchedData = await formDataModel.findAll({ attributes: { exclude: ['createdAt','updatedAt'] },raw: true,})
                    res.status(200).json({'status':'success','message':fetchedData})                  
                } catch (err) {
                    console.log(err.name);
                    console.log(err.message);
                    res.status(400).json({
                      status: "failed",
                      message: `err.name : ${err.name}, err.message:${err.message}`,
                    });
                }
            }
        }
    },
    post:{
        createFormData: async (req,res)=>{
            if(dbSelect==='mongodb'){
                try {
                    let userData = req.user;
                    let formData = {
                        userId:userData._id,
                        name:req.body.name,
                        criteria:req.body.criteria,
                        value:req.body.value,
                        days:req.body.days,
                        email:req.body.email,
                        phone:req.body.phone
                    }
                    console.log(formData)
                    let savedData = await formDataModel.create(formData)
                    return res.status(201).json({"status":"success","message":"data added to db successfully"})
                } catch (err) {
                    console.log(err.name);
                    console.log(err.message);
                    res.status(400).json({
                      status: "failed",
                      message: `err.name : ${err.name}, err.message:${err.message}`,
                    });
                }
            }else{
                try {
                    let userData = req.user;
                    let formData = {
                        userId:userData.id,
                        name:req.body.name,
                        criteria:req.body.criteria,
                        value:req.body.value,
                        days:req.body.days,
                        email:req.body.email,
                        phone:req.body.phone
                    }
                    console.log(formData)
                    let savedData = await formDataModel.create(formData)
                    return res.status(201).json({"status":"success","message":"data added to db successfully"})
                } catch (err) {
                    console.log(err.name);
                    console.log(err.message);
                    res.status(400).json({
                      status: "failed",
                      message: `err.name : ${err.name}, err.message:${err.message}`,
                      errName:err.name,
                      errMessage:err.message
                    });
                }
            }
        },    
    },
    put:{},
    delete:{
        deleteFormData:async(req,res)=>{
            if(dbSelect==='mongodb'){
                try {
                let userData = req.user;
                let {formDataId} = req.params;
                //logic when userid is available
                // let deleteData = await formDataModel.findOneAndDelete({userId:userData._id,_id:formDataId})
                let deleteData = await formDataModel.findOneAndDelete({_id:formDataId});
                console.log(deleteData)
                res.status(200).json({'status':'success','message':'data deleted from db Successfully'});
                } catch (err) {
                    console.log(err.name);
                    console.log(err.message);
                    res.status(400).json({
                      status: "failed",
                      message: `err.name : ${err.name}, err.message:${err.message}`,
                    }); 
                }
            }else{
                try {
                    let userData = req.user;
                    let {formDataId} = req.params;
                    // let deleteData = await formDataModel.destroy({where:{userId:userData._id,_id:formDataId}}) // delete data created by that user
                    let deleteData = await formDataModel.destroy({where:{id:formDataId}});
                    res.status(200).json({'status':'success','message':'data deleted from db Successfully'});
                } catch (err) {
                    console.log(err.name);
                    console.log(err.message);
                    res.status(400).json({
                      status: "failed",
                      message: `err.name : ${err.name}, err.message:${err.message}`,
                    }); 
                }
            }
        }
    }
}