const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: Number,
  },
  address: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User_address",
    require:true
  }],
  product: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    require:true
  }],
});

exports.User = mongoose.model("User", userSchema);
