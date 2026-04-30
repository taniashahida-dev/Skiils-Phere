"use client";

import React, { useState } from "react";
import Navlink from "./Navlink";
import { GrTechnology } from "react-icons/gr";
import { motion } from "framer-motion";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { HiMenu } from "react-icons/hi";
import { div } from "framer-motion/client";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const userData = session?.user
  console.log(userData)
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 border-b border-gray-500 sticky top-0 z-50 bg-gray-800"
    >
      <div className="flex justify-between items-center w-11/12 md:w-10/12 mx-auto">

        <div className="flex items-center gap-3">

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            <HiMenu size={26} />
          </button>

         
          <div className="flex items-center gap-2 text-2xl">
            <span className="bg-purple-500 p-2 rounded-xl">
              <GrTechnology />
            </span>
            <h1 className="text-purple-600 font-bold">
              SkillSphere
            </h1>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <Navlink href={"/"}>Home</Navlink>
            <Navlink href={"/courses"}>Courses</Navlink>
            <Navlink href={"/myprofile"}>My Profile</Navlink>
          </ul>
        </div>

     
       
          {
            userData ? <div className="flex gap-4 items-center "><p>Hello {userData.name}!!</p> <button className="border px-4 py-1 rounded-lg hover:bg-gray-900" onClick={async()=>await authClient.signOut()}>Logout</button></div>:<div className="flex gap-4"> <Link href={"/login"}>
            <button className="border px-4 py-1 rounded-lg hover:bg-gray-900">
              Login
            </button>
          </Link>
          <Link href={"/registration"}>
            <button className="border px-4 py-1 rounded-lg hover:bg-gray-900">
              Register
            </button>
          </Link></div>
          }
         


    


      </div>

  
      {open && (
        <div className="absolute left-6 mt-3 w-48 bg-gray-800  text-white rounded-xl shadow-lg p-3 md:hidden">
          
          <ul className="flex flex-col gap-2">
            <li className=" px-3 py-2 rounded-2xl border-b">
              <Navlink href={"/"}>Home</Navlink>
            </li>
            <li className="px-3 py-2 rounded-2xl border-b">
              <Navlink href={"/courses"}>Courses</Navlink>
            </li>
            <li className="px-3 rounded-2xl border-b py-2">
              <Navlink href={"/myprofile"}>My Profile</Navlink>
            </li>
          </ul>

        </div>
      )}
    </motion.div>
  );
};

export default Navbar;