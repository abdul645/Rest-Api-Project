import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    UserName : {
        type: String,
        required: true,
        trim: true
    },
    Email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    ContactNumber:{
        type: String,
        required: true,
        unique: true
    },
    Password:{
        type: String,
        required: true,
    },
    ConfirmPassword: {
        type: String,
        required: true
    }
})

const adminModel = mongoose.model('AdminDetails', adminSchema)

export default adminModel