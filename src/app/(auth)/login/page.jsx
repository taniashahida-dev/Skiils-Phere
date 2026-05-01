"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";


const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = async (data) => {
     const { data:res, error } = await authClient.signIn.email({ 
  email:data.email,
  password: data.password, 
   callbackURL: "/",
      rememberMe: true,
  }); 
  console.log(res,error) 
  if (error) { 
   
    toast.warning(error.message)
  return 
  } else { 

  toast.success("Login Successful!!!")
    }
  };



const googleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-h-[80vh] border border-gray-400 shadow-lg bg-gray-700 mt-20 p-6 w-[90%] sm:w-sm rounded-xl mx-auto"
    >
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="mx-auto space-y-2">
          
          <h1 className="font-bold text-2xl sm:text-3xl mb-4 text-center sm:text-left">
            Login Your Account
          </h1>

         
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input w-full focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Your Email"
              {...register("email", { required: "Email is required**" })}
            />
            {errors.email && (
              <p className="text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input w-full focus:ring-2 focus:ring-purple-500"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Please enter password**",
              })}
            />
            {errors.password && (
              <p className="text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </fieldset>

       
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn bg-purple-600 w-full my-4 border-none rounded-xl"
          >
            Login
          </motion.button>
        </div>
      </form>

  
      <div className="divider">OR</div>

      <motion.div
        whileHover={{ scale: 1.03 }}
        className="flex items-center gap-2 justify-center border border-gray-500 bg-gray-800 p-2 rounded-xl cursor-pointer"
        onClick={googleSignIn}
      >
        Login with 
        <span className="text-xl flex items-center">
           <FcGoogle />
          <p>oogle</p>
        </span>
      </motion.div>

      {/* Register Link */}
      <p className="my-3 text-sm text-center sm:text-left">
        New here? 
        <Link className="text-purple-400" href={"/registration"}>
           Create a Skills-Phere Account
        </Link>
      </p>
    </motion.div>
  );
};

export default LoginPage;