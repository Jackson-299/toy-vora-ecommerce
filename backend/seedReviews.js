const mongoose = require("mongoose");

const connectDB = require("./config/db");
const Review = require("./models/reviewModel");

const reviews = [
  {
    productId: 101,
    userName: "Sarah Johnson",
    rating: 5,
    comment:
      "The shopping experience is excellent. The website is simple to use, products are easy to find, and the overall experience feels smooth and professional.",
  },
  {
    productId: 102,
    userName: "Michael Anderson",
    rating: 5,
    comment:
      "I really enjoyed shopping here. The product quality is great, delivery was smooth, and the website made the entire buying process very convenient.",
  },
  {
    productId: 103,
    userName: "Emily Williams",
    rating: 4,
    comment:
      "A very clean and user-friendly shopping platform. I loved the variety of products and how easily I could compare different options before buying.",
  },
  {
    productId: 104,
    userName: "David Miller",
    rating: 5,
    comment:
      "The website provides a wonderful shopping experience. Everything is well organized, the products are attractive, and the checkout process is very easy.",
  },
];

const seedReviews = async () => {
  try {
    await connectDB();

    await Review.deleteMany();

    await Review.insertMany(reviews);

    console.log("Reviews inserted successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.log("Failed to insert reviews:", error.message);
  }
};

seedReviews();