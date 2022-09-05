const mongoose = require("mongoose");
const prod_info_schema = new mongoose.Schema({
  Title: String,
  Price: Number,
  Rating: Number,
  ImgUrl: String,
});
var order_model_j = mongoose.model("Admin_Product_Info", prod_info_schema);
module.exports = {order_model_j};
