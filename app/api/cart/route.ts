import { connectDB, disconnectDB } from "@database/connection";
import { NextRequest, NextResponse } from "next/server";
import cart from "@models/cartModel";
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    await connectDB();
    const { product } = await req.json();
    console.log(product)
    const { id, title, price, description, category, image, rating, quantity } =
      product;
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
