"use client";

import React, { useState } from "react";
import Navlink from "./Navlink";
import { GrTechnology } from "react-icons/gr";
import { motion } from "framer-motion";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { RiMenu2Fill } from "react-icons/ri";
import { FaUserAstronaut } from "react-icons/fa6";
import { HiOutlineLogout } from "react-icons/hi";
import Image from "next/image";

const Navbar = () => {
  const { data: session,isPending } = authClient.useSession();
  const userData = session?.user;
  // console.log(userData);
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 border-b border-gray-500 sticky top-0 z-50 bg-gray-800 "
    >
      <div className="flex justify-between items-center w-11/12 md:w-10/12 mx-auto">
        <div className="flex items-center gap-2">
          <button className="md:hidden -ml-5 text-white" onClick={() => setOpen(!open)}>
           
            <RiMenu2Fill size={24}/>
          </button>

        <Link href={'/'}>  <div className="flex items-center gap-2 text-lg md:text-2xl">
            <span className="bg-purple-500 p-2 rounded-xl">
              <GrTechnology />
            </span>
            <h1 className="text-purple-600 font-bold">SkillSphere</h1>
          </div></Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            <Navlink href={"/"}>Home</Navlink>
            <Navlink href={"/courses"}>Courses</Navlink>
            <Navlink href={"/myprofile"}>My Profile</Navlink>
          </ul>
        </div>

        {isPending?<span className="loading loading-ring loading-xl"></span>: userData ? (
          <div className="flex gap-4 items-center ">
            <Image src={userData.image} height={40} width={40} alt={userData.name} className="w-10 h-10 rounded-full border-2 border-purple-500  "></Image>
        
            <button
              className="border md:px-6 px-3 py-1 rounded-lg hover:bg-gray-900 flex gap-1 items-center"
              onClick={async () => await authClient.signOut()}
            >
              Logout
              <HiOutlineLogout />
            </button>
          </div>
        ) : (
          <div className="flex gap-4 text-white">
           
            <Link href={'/login'}>
              <button className="border border-gray-200 px-2 md:px-4 py-1 rounded-lg hover:bg-gray-900">
                Login
              </button>
            </Link>
            <Link href={"/registration"}>
              <button className="border border-gray-200 px-2 md:px-4 py-1 rounded-lg hover:bg-gray-900">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>

      {open && (
        <div className="absolute left-6 mt-3 w-48 bg-gray-800  text-white rounded-xl shadow-lg p-3 md:hidden">
          <ul className="flex flex-col gap-2">
            <li className=" px-3 py-2 rounded-2xl border-b" onClick={() => setOpen(!open)}>
              <Navlink href={"/"}>Home</Navlink>
            </li>
            <li className="px-3 py-2 rounded-2xl border-b" onClick={() => setOpen(!open)}>
              <Navlink href={"/courses"}>Courses</Navlink>
            </li>
            <li className="px-3 rounded-2xl border-b py-2" onClick={() => setOpen(!open)}>
              <Navlink href={"/myprofile"}>My Profile</Navlink >
            </li>
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default Navbar;
