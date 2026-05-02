"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { FiEye } from "react-icons/fi";
import { RiEyeCloseLine } from "react-icons/ri";
import { useState } from "react";


const RegPage = () => {
  const router = useRouter();
  const [viewPass,setViewpass] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleReg = async (data) => {
console.log(data)
    const { data:res, error } = await authClient.signUp.email({
      name:data.name,
      image:data.photo,
       email:data.email,  password: data.password,  }); 
        console.log(res,error)
       if (error)
         { 
         
           toast.warning(error.message)
           return  }
        else { 
         toast.success("Signin Successfull!!")
          router.push("/login")
           
         }
         
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-h-[80vh] border border-gray-400 shadow-lg bg-gray-700 mt-20 p-6 w-[90%] sm:w-sm rounded-xl mx-auto"
    >
      <form onSubmit={handleSubmit(handleReg)}>
        <div className="mx-auto space-y-2">
          <h1 className="font-bold text-2xl sm:text-3xl mb-4 text-center sm:text-left">
            Create Your Account
          </h1>

          {/* Name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input w-full focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Your Name"
              {...register("name", { required: "Name is required**" })}
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </fieldset>

          {/* Photo */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo-URL(Link)</legend>
            <input
              type="url"
              className="input w-full focus:ring-2 focus:ring-purple-500"
              placeholder="URL"
              {...register("photo", { required: "Photo is required**" })}
            />
            {errors.photo && (
              <p className="text-xs text-red-500">{errors.photo.message}</p>
            )}
          </fieldset>

          {/* Email */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input w-full focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Your Email"
              {...register("email", { required: "Email is required**" })}
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          {/* Password */}
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={viewPass?"text": "password"}
              className="input w-full focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Please enter password**",
              })}
            />
              <span className="cursor-pointer text-xl text-purple-500 absolute top-3.5 right-1" onClick={()=>setViewpass(!viewPass)}>
                          {
                            viewPass?<FiEye />:<RiEyeCloseLine />
                          }
                        </span>
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn bg-purple-600 w-full mt-10 border-none rounded-xl"
          >
            Register
          </motion.button>

          {/* Optional link */}
          <p className="text-sm text-gray-300 mt-3 text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-purple-400 underline cursor-pointer"
            >
              Please Login
            </Link>
          </p>
        </div>
      </form>
    </motion.div>
  );
};

export default RegPage;
