"use client";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-[#2d2a6e] text-white p-6 md:p-16 relative overflow-hidden w-11/12 mx-auto md:w-10/12">
      
      {/* Circle 1 (top right) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 4 }}
        className="absolute w-80 h-80 bg-purple-500 opacity-10 rounded-full -top-15 -right-15"
      ></motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 3.3 }}
        className="absolute w-70 h-70 bg-purple-500 opacity-10 rounded-full -bottom-20 -left-20"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
      className="space-y-4 relative z-10">
        
        <motion.p
         initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
       
          className="bg-[#3b378a] inline-block px-4 py-1 rounded-full text-sm"
        >
          🟢 500+ courses now available
        </motion.p>

        <motion.h1
         initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Upgrade your skills. <br />
          Build your future with{" "}
          <span className="text-purple-300">SkillSphere.</span>
        </motion.h1>

        <motion.p
           initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
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
  initial="hidden"
  animate="visible"
  className="flex gap-6 flex-wrap mt-6"
>
  
  {/* 1 */}
  <motion.div
    variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    }}
    transition={{ delay: 0.2 }}
  >
    <h2 className="font-bold">500+</h2>
    <p className="text-gray-300 text-sm">Courses</p>
  </motion.div>

  {/* 2 */}
  <motion.div
    variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    }}
    transition={{ delay: 0.4 }}
  >
    <h2 className="font-bold">50K+</h2>
    <p className="text-gray-300 text-sm">Students</p>
  </motion.div>

  {/* 3 */}
  <motion.div
    variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    }}
    transition={{ delay: 0.6 }}
  >
    <h2 className="font-bold">120+</h2>
    <p className="text-gray-300 text-sm">Instructors</p>
  </motion.div>

  {/* 4 */}
  <motion.div
    variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    }}
    transition={{ delay: 0.8 }}
  >
    <h2 className="font-bold">4.9★</h2>
    <p className="text-gray-300 text-sm">Avg rating</p>
  </motion.div>

</motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;