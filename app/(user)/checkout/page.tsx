"use client";
import { useState, useEffect } from "react";
import { useCheckout } from "@hooks/useCheckout";
import { getSession } from "next-auth/react";
import Link from "next/link";
import Orders from "@components/checkout/Orders";

export default function Checkout() {
    const [isSession, setIsSession] = useState(false);
    const { items, quantity, totalCharges, randomlySelectedShipping, subTotal, estimatedTotal } = useCheckout();
    const authSession = async () => {
        const session = await getSession();
        if (session) {
            return setIsSession(true);
        } else {
            return setIsSession(false);
        }
    }
    useEffect(() => {
        authSession();
    }, [])
    if (!isSession) {
        return (
            <div className="flex flex-col justify-center items-center h-[80dvh]">
                <p className="text-3xl font-semibold">Please login to continue</p>
                <Link href="/login" className="mt-8
							text-base
							font-medium
							focus:ring-2 focus:ring-offset-2 focus:ring-blue-800
							hover:bg-blue-500
                            px-8
                            py-2
                            rounded-sm
							text-white
							bg-blue-800
                            delay-75
                            transition-colors">Login</Link>
            </div>
        )
    }
    else {
        return (
            <>
                <div
                    className="
				flex
				justify-center
				items-center
				2xl:container 2xl:mx-auto
				lg:py-16
				md:py-12
				py-9
				px-4
				md:px-6
				lg:px-20
				xl:px-44
			"
                >
                    <div
                        className="
					flex
					w-full
					sm:w-9/12
					lg:w-full
					flex-col
					lg:flex-row
					justify-center
					items-center
					lg:space-x-10
					2xl:space-x-36
					space-y-12
					lg:space-y-0
				"
                    >
                        <div className="flex w-full flex-col justify-start items-start">
                            <div className="">
                                <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Check out</p>
                            </div>
                            <div className="mt-2">
                                <a
                                    href="/cart"
                                    className="
								text-base
								leading-4
								focus:outline-none focus:underline
								hover:underline hover:text-gray-800
								text-gray-600
							"
                                >
                                    Back to my cart
                                </a>
                            </div>
                            <button
                                className="
							mt-8
							text-base
							font-medium
							focus:ring-2 focus:ring-offset-2 focus:ring-blue-800
							hover:bg-blue-500
							leading-4
							py-4
							w-full
							md:w-4/12
							lg:w-full
							text-white
							bg-blue-800
                            delay-75
                            transition-colors
						"
                            >
                                Sign In
                            </button>
                            <Link href="#shipping"
                                className="
							mt-8
							text-base
							font-medium
							focus:ring-2 focus:ring-offset-2 focus:ring-black-800
							hover:bg-black hover:text-white
							leading-4
							py-4
							w-full
							md:w-4/12
							lg:w-full
							text-black
							bg-black-800
                            delay-75
                            transition-colors
                            text-center
						"
                            >
                                Place Order
                            </Link>
                        </div>

                        <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
                            <div>
                                <h1 className="text-2xl font-semibold leading-6 text-gray-800">Order Summary</h1>
                            </div>
                            <div className="flex mt-7 flex-col items-end w-full space-y-6">
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Total items</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">{items}</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Total Quantity</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">{quantity}</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Total Charges</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">${totalCharges}</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Shipping charges</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">${randomlySelectedShipping}</p>
                                </div>
                                <div className="flex justify-between w-full items-center">
                                    <p className="text-lg leading-4 text-gray-600">Sub total</p>
                                    <p className="text-lg font-semibold leading-4 text-gray-600">${subTotal}</p>
                                </div>
                            </div>
                            <div className="flex justify-between w-full items-center mt-32">
                                <p className="text-xl font-semibold leading-4 text-gray-800">Estimated Total</p>
                                <p className="text-lg font-semibold leading-4 text-gray-800">${estimatedTotal.toFixed(2)} | 18% GST Included</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Orders />
            </>
        );
    }
};

