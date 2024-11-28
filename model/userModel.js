import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    UserName : { 
        type : String,
        required : true,
        trim: true
    },
    Email: { 
        type : String,
        required: true,
        trim: true,
        unique: true
    },
    Password:  {
        type : String,
        required: true
    },
    ConfirmPassword: {
        type: String,
        required: true
    }
})


const userModel = mongoose.model('userDetails', userSchema);

export default userModel;