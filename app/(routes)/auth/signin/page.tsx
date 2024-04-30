"use client";
import React, { useState } from "react";
import { Text } from "@/app/ui-styles/Text";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const [error, setError] = useState(null as string | null);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res?.error) {
        setError(res.error);
        console.log(error);
      } else {
        router.push("/subjects");
        router.refresh();
      }
    } catch (error) {}
  });

  return (
    <div className="w-full h-[100dvh] p-1 rounded bg-sky-800/10">
      <Text css="text-center pt-6  text-sky-900 relative" title>
        Sign in
      </Text>
      <form onSubmit={onSubmit} className="relative">
        <div className="flex flex-col  gap-3  justify-center items-center h-[70dvh]">
          {error && (
            <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">
              {error}
            </p>
          )}
          <input
            {...register("email", {
              required: true,
            })}
            className="rounded p-3  w-[90%] lg:w-[75%]  bg-sky-800/20 focus:outline-none  "
            placeholder="Email"
            type="email"
          />

          <input
            {...register("password", {
              required: true,
            })}
            className="rounded w-[90%] lg:w-[75%]  p-3 bg-sky-800/20 focus:outline-none  "
            placeholder="Password"
            type="password"
          />

          <button
            onClick={() => {
              signIn("google", { callbackUrl: "/subjects" });
            }}
            className=" text-lg p-3 w-[90%] lg:w-[75%] bg-sky-900/60 gap-2 px-6   font-sans text-[0.625rem] font-bold text-center text-gray-900  transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-teal-700/10 active:bg-teal-700/20 "
          >
            <div className="flex gap-2 justify-between">
              Sign in with Google
              <FcGoogle className="text-2xl" />
            </div>
          </button>

          <Text info css="text-sm font-extralight	">
            Don't have an account?{" "}
            <Link href="/auth/register" className="text-sky-900">
              Register
            </Link>
          </Text>
          <button
            className={
              "absolute bottom-0 text-lg p-4 w-[90%] lg:w-[75%] bg-sky-900/60 gap-2 px-6   font-sans text-[0.625rem] font-bold text-center text-gray-900 uppercase  transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-teal-700/10 active:bg-teal-700/20 "
            }
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
