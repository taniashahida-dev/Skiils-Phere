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
         <div className="bg-[#0b0f19] text-white min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* 🔥 LEFT SIDE */}
        <div className="md:col-span-2 space-y-6">
          {/* Image */}
          <div className="relative h-72 rounded-2xl overflow-hidden">
            <Image
              src={findData.image}
              alt={findData.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-liniar-to-t from-black/70 to-transparent" />
          </div>

          {/* Info */}
          <div className="space-y-3">
            <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20">
              {findData.category}
            </span>

            <h1 className="text-3xl font-semibold">{findData.title}</h1>

            <p className="text-gray-300 text-sm">{findData.description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-2"><FaUserTie /> {findData.instructor}</span>
              <span className="flex items-center gap-2"><IoMdStopwatch /> {findData.duration}</span>
              <span className="flex items-center gap-2"><BsFillBarChartLineFill />{findData.level}</span>
              <span className="flex items-center gap-1 text-yellow-400">
                <FaStar /> {findData.rating}
              </span>
            </div>
          </div>

          {/* 📚 Curriculum */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Course Curriculum</h2>

            <div className="space-y-3">
              {curriculum.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg border border-white/10 hover:bg-white/5 transition"
                >
                  <div className="flex items-center gap-3">
                    <FaPlayCircle className="text-purple-400" />
                    <span className="text-sm">{item}</span>
                  </div>

                  <span className="text-xs text-gray-400">
                    Lesson {index + 1}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="md:col-span-1">
          <div className="sticky top-24 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-lg space-y-4">
            <h3 className="text-lg font-semibold">Enroll This Course</h3>

            <p className="text-sm text-gray-400">
              Get full access to all lessons and resources.
            </p>

            <button className="w-full py-2 rounded-full bg-linear-to-r from-purple-500 to-indigo-500 hover:scale-105 transition">
              Enroll Now
            </button>

            <ul className="text-sm text-gray-400 space-y-2 pt-2 border-t border-white/10">
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