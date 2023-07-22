"use client";
import React from "react";
import { Rings } from "react-loader-spinner";

export default function Loading() {
  return (
    <Rings
      height="80"
      width="80"
      color="bg-blue-500"
      radius="6"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="rings-loading"
    />
  );
}
