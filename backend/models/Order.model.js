const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({

  orderNo: String,
  site: String,
  material: String,
  materialPrice: String,
  quantity: String,
  siteManagerName:String,
  totalPrice:String,
  approvalStates:String,
  deliveryAddress:String,
  reason:String,

});

module.exports = Order = mongoose.model("Order", orderSchema);
