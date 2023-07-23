"use client";
import { useLayoutEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@store/slices/productSlice";
import IProducts from "@customTypes/IProducts";
import Image from "next/image";
import axios from "axios";

const Products = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProducts>();

  useLayoutEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://api.mandorakannu.tech/api/products", {
        cache: "force-cache",
      });
      const data: IProducts = await res.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  const addToDatabase = async (product: IProducts) => {
    try {
      const res = await axios.post("/api/cart", { product });
      if (res.status === 200) {
        dispatch(addProduct(product));
        addToCart(product.id);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const addToCart = (id: number) => {
    const productElement = document?.querySelector<Element>(`#product-${id}`);
    productElement!.innerHTML = "Added To Cart";
  };
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
                  id={`product-${product.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded"
                  onClick={() => addToDatabase(product)}
                >
                  Add To Cart
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
