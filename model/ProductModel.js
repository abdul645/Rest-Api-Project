import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    File: {
        type: String,
        required: true
    },
    Category : {
        type: String,
        required: true
    },
    Description :{
        type:String,
        required: true
    },
    Price : {
        type: Number,
        required: true
    }
})

const productModel = mongoose.model('productDetail', productSchema);

export default productModel;