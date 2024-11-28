import productModel from "../model/ProductModel.js"

const userDashboardController = async (req, res) => {
    try {
        const result = await productModel.find();
        res.render('userDashboard', { data: result});
    } catch (error) {
        console.error("Error fetching documents:", error);
        
    }
}

export { userDashboardController }