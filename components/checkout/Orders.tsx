import axios from "axios";
import React, { SetStateAction, useState } from "react";
export default function Orders() {
  const [city, setCity] = useState(false);
  const [region, setRegion] = useState(false);
  const [country, setCountry] = useState(false);
  const [changeCity, setChangeCity] = useState("New York");
  const [changeRegion, setChangeRegion] = useState("New York");
  const [changeCountry, setChangeCountry] = useState("USA");
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    city: changeCity,
    region: changeRegion,
    country: changeCountry,
    zipcode: "",
    phone: "",
  });

  const onChangeUpdateUserDetails = (e: any) => {
    setUserDetail({ ...userDetail, [e.target.name]: e.target.value });
  };

  const onChangeCity = (e: SetStateAction<boolean | string>) => {
    setChangeCity(e as string);
    setCity(false);
  };

  const onChangeCountry = (e: SetStateAction<boolean | string>) => {
    setChangeCountry(e as string);
    setCountry(false);
  };

  const onChangeRegion = (e: SetStateAction<boolean | string>) => {
    setChangeRegion(e as string);
    setRegion(false);
  };

  const orders = async () => {
    try {
      if (
        !userDetail.firstName ||
        !userDetail.lastName ||
        !userDetail.address ||
        !userDetail.address2 ||
        !userDetail.city ||
        !userDetail.region ||
        !userDetail.country ||
        !userDetail.zipcode ||
        !userDetail.phone
      ) {
        const res = await axios.post("/api/orders", userDetail);
        if (res.status === 200) {
          alert("Order placed successfully");
        }
      }
    } catch (err) {}
  };
  return (
    <div className="overflow-y-hidden" id="shipping">
      <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
        <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
          <div className="flex w-full  flex-col justify-start items-start">
            <div className="mt-12">
              <p className="text-xl font-semibold leading-5 text-gray-800">
                Shipping Details
              </p>
            </div>
            <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={onChangeUpdateUserDetails}
              />
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={onChangeUpdateUserDetails}
              />
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Address"
                name="address"
                onChange={onChangeUpdateUserDetails}
              />
              <input
                className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                type="text"
                placeholder="Address (line 02)"
                name="address2"
                onChange={onChangeUpdateUserDetails}
              />
              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                <div className="relative w-full">
                  <p
                    id="button1"
                    className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full"
                  >
                    {changeCity}
                  </p>
                  <button
                    onClick={() => setCity(!city)}
                    className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0"
                  >
                    <svg
                      id="close"
                      className={` transform ${city ? "rotate-180" : ""}  `}
                      width={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L8 10L4 6"
                        stroke="#4B5563"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${
                      city ? "" : "hidden"
                    }`}
                  >
                    <div className="flex flex-col  w-full">
                      <p
                        tabIndex={0}
                        onClick={() => onChangeCity("London")}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        London
                      </p>
                      <p
                        tabIndex={0}
                        onClick={() => onChangeCity("New York")}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        New York
                      </p>
                      <p
                        tabIndex={0}
                        onClick={() => onChangeCity("Dubai")}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        Dubai
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative w-full">
                  <p
                    id="button2"
                    className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full"
                  >
                    {changeRegion}
                    <span className="text-gray-400"> (optional)</span>
                  </p>
                  <button
                    onClick={() => setRegion(!region)}
                    className="focus:outline-none  focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0"
                  >
                    <svg
                      id="close2"
                      className={` transform ${region ? "rotate-180" : ""}  `}
                      width={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L8 10L4 6"
                        stroke="#4B5563"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${
                      region ? "" : "hidden"
                    }`}
                  >
                    <div className="flex flex-col  w-full">
                      <p
                        tabIndex={0}
                        onClick={() => onChangeRegion("London")}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        London
                      </p>
                      <p
                        tabIndex={0}
                        onClick={() => onChangeRegion("New York")}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        New York
                      </p>
                      <p
                        tabIndex={0}
                        onClick={() => onChangeRegion("Dubai")}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        Dubai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between flex-col sm:flex-row w-full items-start space-y-8 sm:space-y-0 sm:space-x-8">
                <div className="relative w-full">
                  <p
                    id="button3"
                    className=" px-2 border-b border-gray-200 text-left leading-4 text-base text-gray-600 py-4 w-full"
                  >
                    {changeCountry}
                  </p>
                  <button
                    onClick={() => setCountry(!country)}
                    className="focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full cursor-pointer absolute bottom-4 right-0"
                  >
                    <svg
                      id="close3"
                      className={` transform ${country ? "rotate-180" : ""}  `}
                      width={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6L8 10L4 6"
                        stroke="#4B5563"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div
                    id="menu3"
                    className={`shadow absolute z-10 bg-white top-10  w-full mt-3 ${
                      country ? "" : "hidden"
                    }`}
                  >
                    <div className="flex flex-col  w-full">
                      <p
                        tabIndex={0}
                        onClick={() => onChangeCountry("USA")}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        USA
                      </p>
                      <p
                        tabIndex={0}
                        onClick={() => onChangeCountry("UK")}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        UK
                      </p>
                      <p
                        tabIndex={0}
                        onClick={() => onChangeCountry("Russia")}
                        className="focus:outline-none cursor-pointer px-3 hover:text-white hover:bg-gray-800 focus:bg-gray-800 focus:text-white text-left  text-base text-gray-600 py-2 w-full"
                      >
                        Russia
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <input
                    className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 pt-4 pb-3   w-full"
                    type="text"
                    placeholder="Zip Code"
                    maxLength={6}
                    name="zipcode"
                    onChange={onChangeUpdateUserDetails}
                  />
                </div>
              </div>
              <input
                className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full"
                type="text"
                placeholder="Phone Number"
                maxLength={10}
                name="phone"
                onChange={onChangeUpdateUserDetails}
              />
            </div>
            <button onClick={orders} className="focus:outline-none focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
              Proceed to payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
