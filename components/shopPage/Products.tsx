"use client";
import { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@store/slices/productSlice";
import IProducts from "@customTypes/IProducts";
import Image from "next/image";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProducts>();

  useLayoutEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://api.mandorakannu.tech/api/products", {cache: "force-cache"});
      const data: IProducts = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
          {products &&
            products.map((product: IProducts) => (
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
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded"
                  onClick={() => dispatch(addProduct(product))}
                >
                  Add to cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
