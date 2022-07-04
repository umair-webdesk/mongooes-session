const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userAddressSchema = new Schema({
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  zipcode: {
    type: Number,
  },
  country: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require:true
  },
});

exports.UserAddress = mongoose.model("User_address", userAddressSchema);
