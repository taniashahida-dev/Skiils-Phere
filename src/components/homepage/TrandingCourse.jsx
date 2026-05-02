"use client";

import { motion } from "framer-motion";

import { GrCloudlinux } from "react-icons/gr";
import { IoLogoPython } from "react-icons/io";
import { SiReactos } from "react-icons/si";

const courses = [
  {
    id: "1",
    icon: SiReactos,
    title: "React & Next.js Mastery",
    subtitle: "Development · 18h · John Doe",
    tag: "Hot",
  },
  {
    id: "2",
    icon: IoLogoPython,
    title: "Python for Data Science",
    subtitle: "Data · 22h · Aisha Raza",
    tag: "New",
  },
  {
    id:"3",
    icon :GrCloudlinux,
    title: "UI/UX Design Fundamentals",
    subtitle: "Design · 10h · Sarah Lee",
    tag: "New",
  },
];
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
const cardVariants = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 80 },
  },
};

const TrandingCourse = () => {
 
 
    return (
         <div className=" bg-linear-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center  py-8 sm:px-6 ">
      <div className="w-11/12 md:w-6/12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-1">
          Trending now
        </h2>
        <p className="text-gray-400 text-sm sm:text-base mb-5 sm:mb-6">
          What students are enrolling in this week
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-3 sm:space-y-4"
        >
          {courses.map(data =>
 { const Icon = data.icon
      return    (
            
      <motion.div
              key={data.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="flex items-center justify-between gap-3 sm:gap-4 bg-gray-800/60 border border-gray-700 rounded-xl p-3 sm:p-4 backdrop-blur-md"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg bg-gray-700 text-indigo-400 font-bold text-lg ">
                 <Icon></Icon>
                </div>

                <div>
                  <h3 className="font-medium text-sm sm:text-base md:text-lg">
                    {data.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {data.subtitle}
                  </p>
                </div>
              </div>

              <span
                className={`text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full whitespace-nowrap ${
                  data.tag === "Hot"
                    ? "bg-orange-200 text-orange-700"
                    : "bg-green-200 text-green-700"
                }`}
              >
                {data.tag}
              </span>
            </motion.div>
          )})}
          
        </motion.div>
      </div>
    </div>
    );
};

export default TrandingCourse;