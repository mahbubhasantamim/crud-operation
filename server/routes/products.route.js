//external import
const express = require("express");
const router = express.Router();
const {
  addProduct,
  getProducts,
  deleteProduct,
  getSingleProduct,
  productSearch,
  updateProduct,
} = require("../controllers/products.controller");

//get all products
router.get("/api/products", getProducts);

//get single product
router.get("/api/products/:id", getSingleProduct);

//add product
router.post("/api/addproduct", addProduct);

//delete product
router.delete("/api/deleteproduct/:id", deleteProduct);

//update product
router.put("/api/updateproduct/:id", updateProduct);

//search product
router.get("/api/search", productSearch);

module.exports = router;
