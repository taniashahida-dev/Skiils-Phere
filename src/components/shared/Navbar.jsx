import React from "react";
import Navlink from "./Navlink";
import { FiUser } from "react-icons/fi";
import { GrTechnology } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className=" p-4 border-b border-b-gray-500 sticky top-0">
    <div className="flex justify-between items-center w-10/12 mx-auto">
          <div className="flex items-center gap-2 text-2xl">
        <span className="bg-purple-500 p-2 rounded-xl "><GrTechnology /></span>
        <h1 className="text-purple-600 font-bold">SkillSphere</h1>
      </div>
      <div>
        <ul className="flex gap-8">
          <Navlink href={"/"}>Home</Navlink>
          <Navlink href={"/courses"}>Courses</Navlink>
          <Navlink href={"/myprofile"}>My Profile</Navlink>
        </ul>
      </div>
      <div className="flex gap-6 items-center">
        <button
          className="btn border border-gray-500 p-4 rounded-2xl text-lg px-6 hover:bg-purple-800 
        "
        >
          Login
        </button>
        <button className="btn border border-gray-500 p-4 rounded-2xl text-lg px-6 hover:bg-purple-800 ">
          Register
        </button>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
