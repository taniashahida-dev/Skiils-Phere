'use client'
import Image from "next/image"
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
const CourseCard = ({ card }) => {
  // console.log(card);
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 backdrop-blur-lg text-white rounded-2xl border border-white/10 overflow-hidden shadow-md hover:shadow-xl transition mb-4 md:mb-10"
    >
      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

        {/* Instructor Badge */}
        <div className="absolute bottom-3 left-3 text-sm bg-white/10 backdrop-blur px-3 py-1 rounded-full border border-white/20">
          {card.instructor}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <h2 className="text-base font-semibold leading-tight line-clamp-2">
          {card.title}
        </h2>

        {/* Bottom Row */}
        <div className="flex items-center justify-between">
          {/* Rating */}
          <span className="flex items-center gap-1 text-yellow-400 text-sm">
            <FaStar className="text-xs" />
            {card.rating}
          </span>

          {/* Button */}
         <Link href={`/courses/${card.id}`}>
          <button className="text-sm px-4 py-1.5 rounded-full border border-white/20 hover:bg-white/10 transition flex gap-1 items-center">
            View Details <FaArrowRight />
          </button></Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
