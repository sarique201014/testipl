const express = require("express");
const Products = require("../Schema/product.schema");

const app = express.Router();

app.post("/", async (req, res) => {
  const { name, email, mobile, address, pincode } = req.body;

  try {
    let product = new Products({ name, mobile, address, email, pincode });
    await product.save();
    res.status(200).send(product);
  } catch (er) {
    return res.status(500).send({ msg: er.message });
  }
});

// app.delete("/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     let deletedData = await Products.findByIdAndDelete(id);
//     return res.status(200).send(deletedData);
//   } catch (e) {
//     res.status(401).send(e.message);
//   }
// });

module.exports = app;
