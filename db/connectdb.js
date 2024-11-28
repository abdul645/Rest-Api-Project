import mongoose from "mongoose";

const ConnectDB = async (DATABASE_URL) =>{
    try {
        const DB_OPTIONS = {
            dbName: "ProductDetail",  
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 10000,
        }
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("DB Connected Successfully.....");
        
    } catch (error) {
        console.log(error);
        
    }
}

export default ConnectDB;