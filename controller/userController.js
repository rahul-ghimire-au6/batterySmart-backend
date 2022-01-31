const userModel=require('../models/userModel')
const bcrypt=require('bcrypt')
var jwt = require('jsonwebtoken');
let {jwtPrivateKey,dbSelect} = process.env

module.exports = {
    get:{},
    post:{
        userRegistration: async (req,res)=>{
            if(dbSelect==='mongodb'){
                try {
                    const userData = req.body
                    let saltRounds = 10;
                    // encrypting password
                    let bcryptData = await bcrypt.hash(userData.password, saltRounds);
                    let data = {
                        name:userData.name,
                        password:bcryptData,
                        email:userData.email
                    }
                    let savedData = await userModel.create(data)              
                    return res.status(201).json({"status":"success","message":"user registered successfully"})
                } catch (err) {
                    console.log(err.name);
                    console.log(err.message);
                    if(err.name === 'MongoServerError' && err.code === 11000){
                        return res.status(400).json({status:"failed",message:`${err.name}: ${err.keyValue.email} email id is already registered with us`})
                    }
                    res.status(400).json({
                      status: "failed",
                      message: `err.name : ${err.name}, err.message:${err.message}`,
                    });
                }
            }else{
                try {
                    const userData = req.body
                    let saltRounds = 10;
                    // encrypting password
                    let bcryptData = await bcrypt.hash(userData.password, saltRounds);
                    let data = {
                        name:userData.name,
                        password:bcryptData,
                        email:userData.email,
                        createdAt:Date.now(),
                        updatedAt:Date.now()
                    }
                    let savedData = await userModel.create(data)              
                    return res.status(201).json({"status":"success","message":"user registered successfully"})
                } catch (err) {
                    console.log(err.name);
                    console.log(err.message);
                    if(err.name === 'SequelizeUniqueConstraintError' && err.message === 'Validation error'){
                        return res.status(400).json({status:"failed",message:`${err.message}: email id is already registered with us`})
                    }
                    res.status(400).json({
                      status: "failed",
                      message: `err.name : ${err.name}, err.message:${err.message}`,
                    });
                }
            }
        }, 
        userLogin: async (req,res)=>{
            if(dbSelect==='mongodb'){
                try {
                    let userData = req.body;
                    let fetchUserData = await userModel.findOne({email:userData.email}).lean()
                    //checking email
                    if(fetchUserData===null){
                        return res.status(401).json({"status":"failed","message":"email or password is incorrect"})
                    }
                    //checking password
                    const match = await bcrypt.compare(userData.password, fetchUserData.password);
                    if(!match){
                        return res.status(401).json({"status":"failed","message":"email or password is incorrect"})
                    }
                    //generating login token
                    let token =await jwt.sign({
                        data: fetchUserData.email
                      }, jwtPrivateKey, { expiresIn: '3h' });
                    return res.status(200).json({"status":"success","message":"logged in successfully",token})
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
                    let userData = req.body;
                    let fetchUserData = await userModel.findOne({where:{email:userData.email}})
                    //checking email
                    if(fetchUserData===null){
                        return res.status(401).json({"status":"failed","message":"email or password is incorrect"})
                    }
                    //checking password
                    const match = await bcrypt.compare(userData.password, fetchUserData.password);
                    if(!match){
                        return res.status(401).json({"status":"failed","message":"email or password is incorrect"})
                    }
                    //generating login token
                    let token =await jwt.sign({
                        data: fetchUserData.email
                      }, jwtPrivateKey, { expiresIn: '3h' });
                    return res.status(200).json({"status":"success","message":"logged in successfully",token})
                } catch (err) {
                    console.log(err.name);
                    console.log(err.message);
                    res.status(400).json({
                      status: "failed",
                      message: `err.name : ${err.name}, err.message:${err.message}`,
                    });
                }
            }
        },   
    },
    put:{},
    delete:{}
}