import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  rating: {
    rate: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
    },
  },
  quantity: {
    type: Number,
  },
});

export default mongoose.models.Cart || mongoose.model("Cart", cartSchema);
