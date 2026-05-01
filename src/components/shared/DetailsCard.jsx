'use client'


import { FaStar, FaPlayCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaUserTie } from "react-icons/fa6";
import { IoMdStopwatch } from "react-icons/io";
import { BsFillBarChartLineFill } from "react-icons/bs";
const DetailsCard = ({findData}) => {
     const curriculum = [
    "Introduction & Course Overview",
    "Fundamentals & Core Concepts",
    "Tools & Setup",
    "Practical Examples",
    "Real-world Project",
    "Advanced Techniques",
    "Best Practices",
    "Final Project & Wrap-up",
  ];
    return (
       <div className="bg-[#0b0f19] text-white min-h-screen py-6 sm:py-10 px-3 sm:px-4">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
    
   
    <div className="md:col-span-2 space-y-5 sm:space-y-6">
      
   
      <div className="relative h-52 sm:h-64 md:h-72 rounded-2xl overflow-hidden">
        <Image
          src={findData.image}
          alt={findData.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-liniar-to-t from-black/70 to-transparent" />
      </div>

  
      <div className="space-y-3">
        <span className="text-[10px] sm:text-xs bg-white/10 px-2 sm:px-3 py-1 rounded-full border border-white/20 inline-block">
          {findData.category}
        </span>

        <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
          {findData.title}
        </h1>

        <p className="text-gray-300 text-xs sm:text-sm">
          {findData.description}
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <FaUserTie /> {findData.instructor}
          </span>

          <span className="flex items-center gap-2">
            <IoMdStopwatch /> {findData.duration}
          </span>

          <span className="flex items-center gap-2">
            <BsFillBarChartLineFill /> {findData.level}
          </span>

          <span className="flex items-center gap-1 text-yellow-400">
            <FaStar /> {findData.rating}
          </span>
        </div>
      </div>

  
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6 backdrop-blur-lg"
      >
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
          Course Curriculum
        </h2>

        <div className="space-y-2 sm:space-y-3">
          {curriculum.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 sm:p-3 rounded-lg border border-white/10 hover:bg-white/5 transition"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <FaPlayCircle className="text-purple-400 text-sm sm:text-base" />
                <span className="text-xs sm:text-sm">{item}</span>
              </div>

              <span className="text-[10px] sm:text-xs text-gray-400">
                Lesson {index + 1}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>

   
    <div className="md:col-span-1">
      <div className="md:sticky md:top-24 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-lg space-y-4">
        
        <h3 className="text-base sm:text-lg font-semibold">
          Enroll This Course
        </h3>

        <p className="text-xs sm:text-sm text-gray-400">
          Get full access to all lessons and resources.
        </p>

        <button className="w-full py-2 text-sm sm:text-base rounded-full bg-linear-to-r from-purple-500 to-indigo-500 hover:scale-105 transition">
          Enroll Now
        </button>

        <ul className="text-xs sm:text-sm text-gray-400 space-y-2 pt-2 border-t border-white/10">
          <li>✔ Full lifetime access</li>
          <li>✔ Access on mobile & desktop</li>
          <li>✔ Certificate of completion</li>
        </ul>
      </div>
    </div>

  </div>
</div>
    );
};

export default DetailsCard;