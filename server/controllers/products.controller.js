//external import
const Product = require("../models/products.model");

//Get all products controller
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

//Get a product controller
const getSingleProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findOne({ _id: productId });
    res.status(200).send(product);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

//Product add controller
const addProduct = async (req, res) => {
  const { productName, productDesc, productPrice } = req.body;

  const newProduct = new Product({
    productName: productName,
    productDesc: productDesc,
    productPrice: productPrice,
  });

  try {
    await newProduct.save();
    res.status(201).json({
      status: "ok",
      message: "Product add",
      productInfo: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

//Product delete controller
const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await Product.findByIdAndDelete({ _id: productId });
    res.status(200).send({
      products: product,
      msg: "Product delete successfull!",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

//Product update controller
const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const { productName, productDesc, productPrice } = req.body;
  try {
    const product = await Product.updateOne(
      { _id: productId },
      {
        $set: {
          productName: productName,
          productDesc: productDesc,
          productPrice: productPrice,
        },
      }
    );
    res.status(200).send({
      products: product,
      msg: "Product update successfull!",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error" + error,
    });
  }
};

//Product search by product name
const productSearch = async (req, res) => {
  const pName = req.query.pName;
  try {
    const product = await Product.find({
      productName: {
        $regex: pName,
        $options: "i",
      },
    });
    res.status(200).send({
      products: product,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};

module.exports = {
  getProducts,
  getSingleProduct,
  addProduct,
  deleteProduct,
  updateProduct,
  productSearch,
};
