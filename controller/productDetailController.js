import productModel from "../model/ProductModel.js";

const productDetailController = async (req, res) => {
    const productId = req.params.id;
    const ProductData = await productModel.findById(productId);
    res.render('productDetail', { data: ProductData })
}

export { productDetailController }