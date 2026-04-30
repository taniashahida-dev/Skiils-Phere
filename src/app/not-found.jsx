"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 text-white px-4">
      
      
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-7xl md:text-9xl font-bold mb-4"
      >
        404
      </motion.h1>

    
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg md:text-xl text-gray-200 text-center mb-6"
      >
        Oops! The page you are looking for does not exist.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Link href="/">
          <button className="px-6 py-3 bg-white text-purple-800 rounded-xl font-semibold hover:bg-gray-200 transition">
            Go Back Home
          </button>
        </Link>
      </motion.div>

  
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="w-20 h-20 bg-purple-500 rounded-full mt-10 opacity-40"
      />
    </div>
  );
}