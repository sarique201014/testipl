const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    'mongodb+srv://mdshariq:m12345@cluster0.zdhjx.mongodb.net/users'
  );
};

module.exports = connect;
