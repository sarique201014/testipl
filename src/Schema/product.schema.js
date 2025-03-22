const mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    name: { type: String },
    mobile: { type: Number },
    address: { type: String },
    email: { type: String },
    date: {
      type: String,
      default: new Date(Date.now()).toLocaleTimeString("en-GB"),
    },
    pincode: { type: String },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("users", userSchema);

module.exports = Products;
