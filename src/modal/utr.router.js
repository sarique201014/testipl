const express = require("express");
const UTRS = require("../Schema/utr.schema");

const app = express.Router();

app.post("/", async (req, res) => {
  const { name, mobile, utr, email } = req.body;

  try {
    let product = new UTRS({ name, mobile, utr, email });
    await product.save();
    res.status(200).send(product);
  } catch (er) {
    return res.status(500).send({ msg: er.message });
  }
});

app.get("/", async (req, res) => {
  try {
    let allUtrs = await UTRS.find();

    res.status(200).send(allUtrs);
  } catch (er) {
    return res.status(404).send({ msg: er.message });
  }
});

app.get("/check-status", async (req, res) => {
  const mobile = req.query.mobile;
  const user = await UTRS.find((u) => u.mobile === mobile);

  console.log(user, "user");

  if (user) {
    res.json({ success: true, status: user.status });
  } else {
    res.json({ success: false, message: "User not found" });
  }
});

module.exports = app;
