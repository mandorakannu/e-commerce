import { connectDB, disconnectDB } from "@database/connection";
import { NextRequest, NextResponse } from "next/server";
import cart from "@models/cartModel";
export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } },
  response: NextResponse
) {
  try {
    await connectDB();
    const { id } = context.params;
    const cartItem = await cart.deleteOne({ id });
    await disconnectDB();
    return NextResponse.json({
      message: "Item deleted successfully",
      cartItem,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Internal Server Error",
      error,
    });
  }
}
