"use client"

import { useForm } from "react-hook-form";
const Register = () => {
    const {register,handleSubmit,formState: {errors}} = useForm();
        const handleRegisterFunc=(data)=>{
           console.log(data)
        }
    return (
         <div className="container mx-auto min-h-[80vh] bg-[#F9F6E9] my-10 flex justify-center items-center">
            <div className="w-96 mx-auto py-5 px-5 sm:px-10 rounded-2xl text-white bg-[#34B0BD]">
                <h3 className="mb-3 font-semibold text-lg sm:text-2xl text-center">Register Your Account</h3>
                <hr />
                <form onSubmit={handleSubmit(handleRegisterFunc)} className="mt-4">
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend text-white text-base sm:text-xl">Name</legend>
                    <input type="text" {...register ("name" ,{required: "Need Your Name!"})}  className="input text-[#34B0BD]" placeholder="Name here" />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend text-white text-base sm:text-xl">Photo URL</legend>
                    <input type="text" {...register ("photo" ,{required: "Need Photo URL!"})}  className="input text-[#34B0BD]" placeholder="Photo url here" />
                    {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend text-white text-base sm:text-xl">Email</legend>
                    <input type="email" {...register ("email" ,{required: "Need Email!"})}  className="input text-[#34B0BD]" placeholder="Email here" />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </fieldset>
                    <fieldset className="fieldset">
                    <legend className="fieldset-legend text-white text-base sm:text-xl">Password</legend>
                    <input type="password" {...register ("password", {required: "Need Password!"})}  className="input text-[#34B0BD]" placeholder="Password here" />
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </fieldset>
                    <button className="btn text-base sm:text-lg w-full mt-4 text-white bg-[#34B0BD]">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;