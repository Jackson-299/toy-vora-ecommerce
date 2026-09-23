const Product = require("../models/productModel");

// Create Product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
};

// Get All Products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get products",
      error: error.message,
    });
  }
};

// Get Single Product
const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: "Failed to get product",
      error: error.message,
    });
  }
};

// Update Product
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update product",
      error: error.message,
    });
  }
};

// Delete Product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findOneAndDelete({
      id: req.params.id,
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete product",
      error: error.message,
    });
  }
};

// Search Products
const searchProducts = async (req, res) => {
  try {
    const search = req.query.search || "";

    const products = await Product.find({
      $or: [
        { name: { $regex: search, $options: "i" } },
        { brand: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
      ],
    });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to search products",
      error: error.message,
    });
  }
};

// Sort Products
const sortProducts = async (req, res) => {
  try {
    const sort = req.query.sort;

    let sortOption = {};

    if (sort === "priceLowToHigh") {
      sortOption.price = 1;
    } else if (sort === "priceHighToLow") {
      sortOption.price = -1;
    } else if (sort === "ratingHighToLow") {
      sortOption.rating = -1;
    } else if (sort === "nameAZ") {
      sortOption.name = 1;
    }

    const products = await Product.find().sort(sortOption);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Failed to sort products",
      error: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
  sortProducts,
};