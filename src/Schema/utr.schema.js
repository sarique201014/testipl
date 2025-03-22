const mongoose = require("mongoose");

let utrSchema = mongoose.Schema(
  {
    name: { type: String },
    mobile: { type: Number },
    utr: { type: String },
    email: { type: String },
    date: {
      type: String,
      default: new Date(Date.now()).toLocaleTimeString("en-GB"),
    },
  },
  {
    timestamps: false,
  }
);

const UTRS = mongoose.model("utrs", utrSchema);

module.exports = UTRS;
