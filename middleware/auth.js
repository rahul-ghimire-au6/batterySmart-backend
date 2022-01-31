const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken')
const {jwtPrivateKey,dbSelect} = process.env


const withAuth = async (req,res,next)=>{
    if(dbSelect==='mongodb'){
        try {
            if (req.header("Authorization")) {
                const token = req.header("Authorization")
                let decodedData = jwt.verify(token, jwtPrivateKey);
                let userData = await userModel.findOne({email:decodedData.data},{createdAt:0,updatedAt:0,__v:0}).lean()
                if(userData===null){
                    return res.status(401).json({status:"failed",message:"invalid token, please kindly login again"})
                }
                req.user = userData
                return next()
            }
            return res.status(401).json({status:"failed",message:"invalid token, please kindly login again"})
        } catch (err) {
            console.log(err.name);
            console.log(err.message);
            if(err.name === 'JsonWebTokenError' && err.message === 'invalid signature'){
                return res.status(401).json({status:"failed",message:"invalid token, please kindly login again"})
            }
            if(err.name === 'TokenExpiredError' && err.message === 'jwt expired'){
                return res.status(401).json({status:"failed",message:"token expired, please kindly login again"})
            }
            return res.status(400).json({status:"failed",message:`err.name : ${err.name}, err.message:${err.message}`})
        }
    }else{
        try {
            if (req.header("Authorization")) {
                const token = req.header("Authorization")
                let decodedData = jwt.verify(token, jwtPrivateKey);
                let userData = await userModel.findOne({where:{email:decodedData.data}})
                if(userData===null){
                    return res.status(401).json({status:"failed",message:"invalid token, please kindly login again"})
                }
                req.user = userData
                return next()
            }
            return res.status(401).json({status:"failed",message:"invalid token, please kindly login again"})
        } catch (err) {
            console.log(err.name);
            console.log(err.message);
            if(err.name === 'JsonWebTokenError' && err.message === 'invalid signature'){
                return res.status(401).json({status:"failed",message:"invalid token, please kindly login again"})
            }
            if(err.name === 'TokenExpiredError' && err.message === 'jwt expired'){
                return res.status(401).json({status:"failed",message:"token expired, please kindly login again"})
            }
            return res.status(400).json({status:"failed",message:`err.name : ${err.name}, err.message:${err.message}`})
        }
    }
}


module.exports = {withAuth}