"use client";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-[#2d2a6e] text-white p-6 md:p-16 relative overflow-hidden">
      
      {/* Circle 1 (top right) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute w-80 h-80 bg-purple-500 opacity-10 rounded-full -top-15 -right-15"
      ></motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute w-70 h-70 bg-purple-500 opacity-10 rounded-full -bottom-20 -left-20"
      ></motion.div>

      <div className="space-y-4 relative z-10">
        
        <motion.p
          initial={{ y: -80, opacity: 0}}
          animate={{ y: 0, opacity: 1  }}
          transition={{ duration: 0.5 }}
          className="bg-[#3b378a] inline-block px-4 py-1 rounded-full text-sm"
        >
          🟢 500+ courses now available
        </motion.p>

        <motion.h1
         initial={{ y: -80, opacity: 0}}
          animate={{ y: 0, opacity: 1  }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Upgrade your skills. <br />
          Build your future with{" "}
          <span className="text-purple-300">SkillSphere.</span>
        </motion.h1>

        <motion.p
          initial={{ y: -80, opacity: 0}}
          animate={{ y: 0, opacity: 1  }}
          transition={{ duration: 0.5 }}
          className="text-gray-300"
        >
          Learn from industry experts at your own pace. Earn certificates and
          land your dream career.
        </motion.p>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-4 flex-wrap"
        >
          <button className="border px-6 py-2 rounded-xl hover:bg-white hover:text-black">
            Explore courses
          </button>

          <button className="border px-6 py-2 rounded-xl">
            ▶ Watch demo
          </button>
        </motion.div>

        {/* stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex gap-6 flex-wrap mt-6"
        >
          <div>
            <h2 className="font-bold">500+</h2>
            <p className="text-gray-300 text-sm">Courses</p>
          </div>

          <div>
            <h2 className="font-bold">50K+</h2>
            <p className="text-gray-300 text-sm">Students</p>
          </div>

          <div>
            <h2 className="font-bold">120+</h2>
            <p className="text-gray-300 text-sm">Instructors</p>
          </div>

          <div>
            <h2 className="font-bold">4.9★</h2>
            <p className="text-gray-300 text-sm">Avg rating</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Banner;