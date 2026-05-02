"use client"
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLoginFunc = async (data) => {
        const { name, email, password, photo } = data;
        const { data: res, error } = await authClient.signIn.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
        });
        if (error) {
            toast.error(error.message)
        }
        if (res) {
            toast.success("Login Successful");
        }
    }
    return (
        <div className="container mx-auto min-h-[80vh] bg-[#F9F6E9] my-10 flex justify-center items-center">
            <div className="w-96 mx-auto py-5 px-5 sm:px-10 rounded-2xl text-white bg-[#34B0BD]">
                <h3 className="mb-3 font-semibold text-lg sm:text-2xl text-center">Login Your Account</h3>
                <hr />
                <form onSubmit={handleSubmit(handleLoginFunc)} className="mt-4">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-white text-base sm:text-xl">Email</legend>
                        <input type="email" {...register("email", { required: "Need Email!" })} className="input text-[#34B0BD]" placeholder="Email here" />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-white text-base sm:text-xl">Password</legend>
                        <input type="password" {...register("password", { required: "Need Password!" })} className="input text-[#34B0BD]" placeholder="Password here" />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn text-base sm:text-lg w-full mt-4 text-white bg-[#34B0BD]">Login</button>
                </form>
                <div className="flex flex-col sm:flex-row justify-center sm:gap-2">
                    <Link href={'/register'} className="btn btn-outline mt-4 rounded-full">Create Account</Link>
                    <button className="btn btn-outline mt-4 rounded-full">Login with google</button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;