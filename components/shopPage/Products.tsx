"use client";
import { useState, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@store/slices/productSlice";
import IProducts from "@customTypes/IProducts";
import Image from "next/image";
import axios from "axios";
import { Oval } from "react-loader-spinner";

const Products = () => {
  const oval = (
    <Oval
      height={20}
      width={20}
      color="rgb(59 130 246)"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="white"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
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

  const [loadingProductId, setLoadingProductId] = useState<string | null>(null);

  const addToDatabase = async (product: IProducts) => {
    setLoadingProductId(product.id.toString());
    const updateProduct = { ...product, quantity: 1 };
    try {
      const res = await axios.post("/api/cart", { updateProduct });
      if (res.status === 200) {
        dispatch(addProduct(product));
        alert("Product added to cart");
      } else {
        alert("Something went wrong" + res.status);
      }
    } catch (error) {
      alert("INTERNAL SERVER ERROR");
      console.log(error);
    } finally {
      setLoadingProductId("");
    }
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
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded w-1/2 flex items-center justify-center"
                  onClick={() => addToDatabase(product)}
                >
                  <span>
                    {loadingProductId == product.id.toString()
                      ? oval
                      : "Add to cart"}
                  </span>
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Products;
