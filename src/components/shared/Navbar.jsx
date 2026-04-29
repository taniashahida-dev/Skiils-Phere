"use client";

import React from "react";
import Navlink from "./Navlink";
import { GrTechnology } from "react-icons/gr";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-4 border-b border-b-gray-500 sticky top-0  z-50"
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-10/12 mx-auto gap-4">
        
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-2xl"
        >
          <span className="bg-purple-500 p-2 rounded-xl">
            <GrTechnology />
          </span>
          <h1 className="text-purple-600 font-bold">
            SkillSphere
          </h1>
        </motion.div>

        {/* Nav Links */}
        <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
          <Navlink href={"/"}>Home</Navlink>
          <Navlink href={"/courses"}>Courses</Navlink>
          <Navlink href={"/myprofile"}>My Profile</Navlink>
        </ul>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border border-gray-500 p-2 md:px-6  rounded-2xl text-lg px-6 hover:bg-purple-800 transition"
          >
            Login
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="border border-gray-500 p-2  md:px-6 rounded-2xl text-lg px-6 hover:bg-purple-800 transition"
          >
            Register
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;