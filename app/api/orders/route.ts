import { connectDB, disconnectDB } from "@database/connection";
import { NextRequest, NextResponse } from "next/server";
import Orders from "@models/ordersModel";

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    await connectDB();
    const {
      firstName,
      lastName,
      email,
      address,
      address2,
      city,
      region,
      country,
      zipcode,
      phone,
      cart,
    } = await request.json();

    const isUserOrderAvaiable = await Orders.findOne({ email });
    if (isUserOrderAvaiable) {
      const order = await Orders.findOneAndUpdate(
        { email },
        {
          // update the current cart with the new cart
          $set: { cart: isUserOrderAvaiable.cart.concat(cart) },
        }
      );
      disconnectDB();
      return NextResponse.json(order, { status: 200 });
    } else {
      const order = await Orders.create({
        firstName,
        lastName,
        email,
        address,
        address2,
        city,
        region,
        country,
        zipcode,
        phone,
        cart,
      });
      disconnectDB();
      return NextResponse.json(order, { status: 201 });
    }
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
