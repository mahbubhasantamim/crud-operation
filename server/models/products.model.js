const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    productDesc: { type: String, required: true },
    productPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

//create model
module.exports = new mongoose.model("Product", productSchema);
