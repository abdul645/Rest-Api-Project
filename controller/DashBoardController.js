

// const DashBoardController = (req, res) => {
//     res.render('DashBoard', {title: 'DashBoard'});
// }
// export {DashBoardController}

import productModel from "../model/ProductModel.js";

// Create a new document
export const createDoc = async (req, res) =>{
    try {
        // Access form data 
        const {title, category, description, price} = req.body;

        // Handle file validation
        if (!req.file) {
            return res.status(400).json("No file upload");
        }

        // save the documents 
        const doc = new productModel({
            Title: title,
            File: req.file.filename,
            Category: category,
            Description: description,
            Price: price
        });

        const result = await doc.save();
        res.redirect('/dashboard');

    } catch (error) {
        console.log("Error creating Dosument:", error);
    }
}

// Get all documents

export const getAllDocs = async (req, res) => {

    try {
        
        const result = await productModel.find();
        res.render('DashBoard', { data: result});

    } catch (error) {
        console.error("Error fetching documents:", err);        
    }
};


// Show Edit form with data 

export const editDoc = async (req, res) =>{
    try {
        const result = await productModel.findById(req.params.id);
        if (!result) {
            return res.status(404).json("Document not found");
        }

        res.render('edit', {data : result})
    } catch (error) {
        console.error("Error fetching document for editing:", err);
    }
}


// Update a document by ID

export const updateDocDyId = async (req, res) =>{
    try {
        const result = await productModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!result){
            return res.status(404).json("Document not found for updating.")
        }
        console.log("Document updated:", result);
        res.redirect('/dashboard');
        
    } catch (error) {
        console.error("Error updating document:", err);   
    }
}


export const deleteDocById = async (req, res) =>{

    try {
        const result = await productModel.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).send("Document not found for deletion.");
        }

        console.log("Document deleted:", result);
        res.redirect('/dashboard')
        

    } catch (error) {
        console.error("Error deleting document:", err);   
    }
}