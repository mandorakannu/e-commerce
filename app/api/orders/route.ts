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
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
