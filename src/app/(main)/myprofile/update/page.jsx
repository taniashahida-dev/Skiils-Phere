'use client'

import { authClient } from "@/lib/auth-client";

import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


const UpdateProfile = () => {
     const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const router = useRouter();

  const handleUpdate = async () => {
    try {
      await authClient.updateUser({
        name,
        image,
      });

      toast.success("Profile Updated!");

      router.push("/myprofile");
    } catch (err) {
      toast.error("Update failed");
    }
  };

    return (
      <div className="bg-[#0b0f19] text-white min-h-screen flex items-center justify-center px-4">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-lg"
      >
        <h1 className="text-xl sm:text-2xl font-semibold mb-4 text-center">
          Update Profile
        </h1>

        {/* Name */}
        <input
          type="text"
          placeholder="Enter new name"
          className="w-full p-2 mb-3 rounded bg-white/10 border border-white/20 outline-none"
          onChange={(e) => setName(e.target.value)}
        />

        {/* Image */}
        <input
          type="text"
          placeholder="Enter image URL"
          className="w-full p-2 mb-4 rounded bg-white/10 border border-white/20 outline-none"
          onChange={(e) => setImage(e.target.value)}
        />

        {/* Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={handleUpdate}
          className="w-full py-2 rounded-full bg-linear-to-r from-purple-500 to-indigo-500"
        >
          Update Information
        </motion.button>
      </motion.div>

    </div>
    );
};

export default UpdateProfile;