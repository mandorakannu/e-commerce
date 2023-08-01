"use client";
import { RootState } from "@store/store";
import Image from "next/image";
import { useContext } from "react";
import { useSelector } from "react-redux";
import IProducts from "@customTypes/IProducts";
import Link from "next/link";
import { AlertDialogBox } from "@components/chakraUI/AlertDialog";
import { AlertDialogContext } from "@store/context/AlertDialog/alertContext";
import { AiOutlineShoppingCart } from "react-icons/ai"

export default function Cart() {
  const products = useSelector((state: RootState) => state.products);
  const data = useContext(AlertDialogContext);
  const isProductRemoved = (id: number) => {
    data?.setProductIdFxn(`product-${id}`);
    if (!data?.state) {
      data?.openDialogFxn(true);
      data?.setProductIdFxn(`product-${id}`);
    }
    else {
      data?.openDialogFxn(false);
    }
  };
  return (
    <>
      {products.length === 0 && (
        <div className="flex flex-col justify-center items-center gap-4 p-4 text-center w-full h-[70dvh]">
          <h1 className="text-xl font-bold">Your Cart is Empty</h1>
          <Link href="/shop">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded mx-3">
              Go Shopping
            </button>
          </Link>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
        {products.map((product: IProducts) => (
          <div
            key={product.id}
            className="flex flex-col justify-center items-center gap-4 border-2 border-blue-500 p-4 text-center w-full h-[70dvh]"
          >
            {data?.state ? (
              <AlertDialogBox
                title="Delete Cart Item"
                productId={`product-${product.id}`}
                product={products}
              />
            ) : null}
            <Image
              src={product.image}
              width={100}
              height={100}
              alt={product.title}
            />
            <h1 className="text-xl font-bold">{product.title}</h1>
            <p className="text-xl font-bold">${product.price}</p>
            <p className="text-xl font-bold flex justify-center items-center"><span className="flex justify-center items-center">Item <AiOutlineShoppingCart /></span> :&nbsp; {product.quantity}</p>
            <section>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded mx-3"
                onClick={() => isProductRemoved(product.id)}
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
