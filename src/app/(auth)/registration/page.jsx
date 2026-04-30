'use client'
import Link from 'next/link';
import { useForm } from 'react-hook-form';


const RegPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const handleReg=async(data)=>{
    //  const { data:res, error } = await authClient.signIn.email({
    //   email:data.email,
    //   password: data.password,
    // });
    // console.log(res,error)
    // if (error) {
    //   alert(error.message)
    //   return
    // } else {
    //   alert("Login Successful")
    // }

}

    return (
        <div className="max-h-[80vh] border border-gray-400 shadow-lg bg-gray-700  mt-30 p-6 w-sm rounded-xl mx-auto  ">
      <form onClick={handleSubmit(handleLogin)}>
        <div className="mx-auto space-y-2">
          <h1 className=" font-bold text-3xl mb-4 ">Login Your Account</h1>
          <fieldset className="fieldset">
              <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input "
              placeholder="Enter Your Email"
              {...register("email", { required: 'Email is required**' })}
            />
            {
errors.email && (<p className="text-xs text-red-500">{errors.email.message}</p>)
            }
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Enter Your Password"
                {...register("password", { required: 'Please enter password**' })}
            />
              {
errors.password && (<p className="text-xs text-red-500">{errors.password.message}</p>)
            }
          </fieldset>
          <button className="btn bg-purple-600 w-full mt-10 border-none rounded-xl">
            Login
          </button>
          <p className="my-2 text-sm">
            New here ?{" "}
            <Link className="text-purple-400 " href={"/registration"}>
              Create a Skiils-Phere Account
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
    );
};

export default RegPage;