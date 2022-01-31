const mongoose = require("mongoose");
const Sequelize = require('sequelize');
const {MONGODB_URL,POSTGRES_USERNAME,POSTGRES_PASS,dbSelect,NEnv} = process.env

if(dbSelect==='mongodb'){
    let connect = async () => {
        try {
            await mongoose.connect(MONGODB_URL, {
                useUnifiedTopology: true,
                useNewUrlParser: true
            })
            await console.log("connected to mongodb successfully")
        } catch (err) {
            await console.log(err.message)
        }
    }
    connect();
}else{
    if(NEnv==='development'){
        let sequelize = new Sequelize('ysnqqrji','postgres', 'root', {
            host: "localhost",
            dialect:'postgres',
            define: {
              timestamps: false
          }
          });
          sequelize
            .authenticate()
            .then(() => {
              console.log('connected to offline PostgresSql successfully');
            })
            .catch(err => {
              console.error('Unable to connect to the offline database:', err);
            });
    }else{
        let sequelize = new Sequelize(POSTGRES_USERNAME,POSTGRES_USERNAME, POSTGRES_PASS, {
            host: 'arjuna.db.elephantsql.com',
            dialect:'postgres',
            define: {
              timestamps: false
          }
          });
          sequelize
            .authenticate()
            .then(() => {
              console.log('connected to PostgresSql successfully');
            })
            .catch(err => {
              console.error('Unable to connect to the database:', err);
            });  
    }
}

