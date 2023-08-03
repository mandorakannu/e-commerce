import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  address: String,
  address2: String,
  city: String,
  region: String,
  country: String,
  zipcode: Number,
  phone: Number,
  cart: Array,
});

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
