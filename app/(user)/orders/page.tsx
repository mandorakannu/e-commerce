import React from "react";
import { connectDB } from "@database/connection";
import ordersModel from "@models/ordersModel";
import { ICart, IOrders } from "@customTypes/IOrders";
import { getServerSession } from "next-auth";
import { authOptions } from "@utils/nextAuth/authOptions";
import Link from "next/link";

export default async function Orders() {
  const session = await getServerSession(authOptions);
  const fetchOrders = async () => {
    await connectDB();
    return await ordersModel.find({ email: session?.user?.email });
  };
  const orderLists = (await fetchOrders()) as IOrders[];
  return (
    <>
      {!session && (
        <div className="flex flex-col justify-center items-center h-[80dvh]">
          <h1 className="text-3xl font-bold text-center">
            You need to login to see your orders
          </h1>
          <Link
            href="/login"
            className="mt-8 text-base font-medium focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 hover:bg-blue-500 px-8 py-2 rounded-sm	text-white	bg-blue-800 delay-75 transition-colors"
          >
            Login
          </Link>
        </div>
      )}
      <div className="flex flex-col justify-start items-start gap-6 my-4">
        {orderLists.map((order) =>
          order.cart.map((item: ICart) => (
            <div
              key={item.id}
              className="flex flex-col justify-start items-start bg-blue-50 text-black w-full p-2"
            >
              <span>{item.title}</span>
              <span>Price: {item.price}</span>
              <span>Quantity: {item.quantity}</span>
            </div>
          ))
        )}
      </div>
    </>
  );
}
