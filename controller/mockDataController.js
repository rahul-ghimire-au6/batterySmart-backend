const mockDataModel=require('../models/mockDataModel')
let {dbSelect} = process.env

module.exports = {
    get:{
        fetchMockData:async(_,res)=>{
            if(dbSelect==='mongodb'){
                try {
                    let fetchedData = await mockDataModel.find({},{createdAt:0,updatedAt:0,__v:0}).lean()
                    if(fetchedData===null){
                        return  res.status(400).json({'status':'failed','meesage':'no data in db'})
                    }
                    let convertedData = {}
                    for(let i=0;i<fetchedData.length;i++){
                        if(fetchedData[i].name==='series1'){
                            convertedData.series1 = JSON.parse(fetchedData[i].data)
                        }else{
                            convertedData.series2 = JSON.parse(fetchedData[i].data)
                        }
                    }          
                    res.status(200).json({'status':'success','message':convertedData})
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
                    let fetchedData = await mockDataModel.findAll({ attributes: { exclude: ['createdAt','updatedAt'] },raw: true,})
                    let series1Data=[]
                    let series2Data=[]
                    fetchedData.forEach((element)=>{
                        if(element.name==='series1'){
                            series1Data.push(element.data)  
                        }else{
                            series2Data.push(element.data)
                        }
                    })
                    let convertedData = {
                        series1:series1Data,
                        series2:series2Data
                    }
                    res.status(200).json({'status':'success','message':convertedData})                  
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
        createMockData:async(req,res)=>{
            if(dbSelect==='mongodb'){
                try {
                    let data159 = {
                        name:req.body.name,
                        data:req.body.data
                    }
                    let savedData = await mockDataModel.create(data159)
                    res.status(201).json({'message':'success','messsage':'saved data successfully to db'})
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