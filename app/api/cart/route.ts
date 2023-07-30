import { connectDB, disconnectDB } from "@database/connection";
import { NextRequest, NextResponse } from "next/server";
import cart from "@models/cartModel";
export async function POST(request: NextRequest, response: NextResponse) {
  try {
    await connectDB();
    const { updateProduct } = await request.json();
    const { id, title, price, description, category, image, rating, quantity } =
      updateProduct;
    const isProductAvailable = await cart.findOne({ id });
    if (isProductAvailable) {
      await cart.findOneAndUpdate(
        { id },
        { $set: { quantity: isProductAvailable.quantity + 1 } }
      );
      return new Response(
        JSON.stringify({ message: "Product Quantity Is Updated!" })
      );
    }
    await cart.create({
      id,
      title,
      price,
      description,
      category,
      image,
      rating,
      quantity,
    });
    await disconnectDB();
    return new Response(JSON.stringify({ message: "Product added to cart" }), {
      status: 200,
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ message: "Product not added to cart", error: err }),
      { status: 500 }
    );
  }
}
