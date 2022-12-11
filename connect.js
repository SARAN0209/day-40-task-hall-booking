require("dotenv").config()
const {MongoClient}=require('mongodb');


module.exports={
    selectedDb:{},
    async connect(){
        try{
            console.log(process.env.MONGO)
            const client =await MongoClient.connect(process.env.MONGO);
            this.selectedDb=client.db('hallbooking');
        }
        catch (err){
            console.log(err);
        }
    }
}