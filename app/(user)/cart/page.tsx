"use client";
import { RootState } from "@store/store";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import IProducts from "@customTypes/IProducts";
import { removeProduct } from "@store/slices/productSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";

export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products);
  console.log(products);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
        {products.map((product: IProducts) => (
          <div
            key={product.id}
            className="flex flex-col justify-center items-center gap-4 border-2 border-blue-500 p-4 text-center w-full h-[70dvh]"
          >
            <Image
              src={product.image}
              width={100}
              height={100}
              alt={product.title}
            />
            <h1 className="text-xl font-bold">{product.title}</h1>
            <p className="text-xl font-bold">${product.price}</p>
            <section>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded mx-3"
                onClick={() => dispatch(removeProduct(product.id))}
              >
                Remove
              </button>
              <Link href="/checkout">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded mx-3">
                  Checkout
                </button>
              </Link>
            </section>
          </div>
        ))}
      </div>
    </>
  );
}
