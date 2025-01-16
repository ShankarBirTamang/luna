"use client";

import { login } from "@/api/auth";
import {
  FORGOT_PASSWORD_ROUTE,
  HOME_ROUTE,
  REGISTER_ROUTE,
} from "@/constants/routes";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineMailOutline } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import PasswordField from "./PasswordField";
import Spinner from "../Spinner";

function LoginForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function submitForm(data) {
    setLoading(true);

    try {
      const response = await login(data);

      localStorage.setItem("authToken", response.token);

      toast.success("Login successful.", {
        autoClose: 1500,
        onClose: () => router.push(HOME_ROUTE),
      });
    } catch (error) {
      toast.error(error.response.data, {
        autoClose: 1500,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <div className="py-2">
        <div className="flex items-end border-b border-gray-500 dark:text-white">
          <MdOutlineMailOutline className="mb-2" />
          <input
            type="email"
            id="email"
            className="px-3 py-1 w-full mt-1 bg-transparent focus:outline-none"
            placeholder="Your email address"
            {...register("email", {
              required: "Email address is required.",
            })}
          />
        </div>
        <p className="text-red-600 text-sm m-1">{errors.email?.message}</p>
      </div>
      <div className="py-2 ">
        <PasswordField
          id="password"
          placeholder="Your password"
          {...register("password", {
            required: "Password is required.",
          })}
        />
        <p className="text-red-600 text-sm m-1">{errors.password?.message}</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mb-3">
        <div>
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe" className="text-sm ml-2 dark:text-white ">
            Remember me
          </label>
        </div>

        <Link
          href={FORGOT_PASSWORD_ROUTE}
          className="text-sm underline text-primary-400 hover:text-primary-600 dark:text-white hover:dark:text-gray-200"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex items-center mt-3 bg-primary-600 text-white px-10 py-2 rounded cursor-pointer disabled:bg-primary-300 disabled:cursor-not-allowed hover:bg-primary-700"
      >
        {loading ? <Spinner className="w-6 h-6  mr-2" /> : null}
        Login
      </button>

      <Link
        href={REGISTER_ROUTE}
        className="text-primary-400 block mt-6 hover:underline dark:text-white"
      >
        Create account?
      </Link>

      <ToastContainer />
    </form>
  );
}

export default LoginForm;
