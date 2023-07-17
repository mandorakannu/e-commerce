import { memo, useId } from "react";
import cards from "@jsons/index.json";
import Link from "next/link";
const Home = (): JSX.Element => {
  const id = useId();
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 py-10 mx-6">
        {cards.map((card, index) => {
          return (
            <div
              key={index}
              id={`Index${id}Card${index}`}
              className={`flex flex-col justify-end items-start bg-gray-200 shadow-lg px-10 pb-10 lg:w-1/4 h-[70dvh] ${card.classValue}`}
            >
              <div className="flex flex-col justify-start items-start text-white gap-5">
                <h1 className="text-2xl font-semibold">{card.title}</h1>
                <p className="font-semibold">{card.content}</p>
              </div>
              <Link
                href="/shop"
                className="uppercase bg-white text-black hover:bg-black hover:text-white transition-colors duration-300 ease-in-out px-4 py-2 my-4"
              >
                Shop Now
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default memo(Home);
