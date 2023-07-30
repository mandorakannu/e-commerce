"use client";

import React from "react";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  return (
    <>
      <section className="h-[80dvh] flex justify-center items-center">
        <button
          onClick={() => signIn("google", { callbackUrl: "/shop" })}
          className="flex justify-center items-center bg-blue-500 hover:bg-blue-600 transition-colors delay-75 text-white px-4 py-2 rounded-md gap-3"
        >
          <FcGoogle /> Sign in with Google
        </button>
      </section>
    </>
  );
}
