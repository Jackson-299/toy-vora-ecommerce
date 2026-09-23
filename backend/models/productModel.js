const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },

    image: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    brand: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
      default: 0,
    },

    reviews: {
      type: Number,
      required: true,
      default: 0,
    },

    originalPrice: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    discount: {
      type: Number,
      required: true,
      default: 0,
    },

    offer: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;