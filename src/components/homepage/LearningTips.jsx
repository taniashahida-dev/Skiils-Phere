"use client";
import { motion } from "framer-motion";
import { BsStopwatch } from "react-icons/bs";
import { FaCircleNodes } from "react-icons/fa6";
import { TiTickOutline } from "react-icons/ti";


const LearningTips = () => {
  return (
      <div className="p-6 md:p-12 bg-[#1f1f1f] text-white">
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Learning tips</h1>
        <p className="text-gray-400 text-sm">
          Study smarter, not harder
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {[
          {
            title: "Time blocking",
            desc: "Reserve 1–2 hour focused sessions daily for maximum retention.",
            icon: <BsStopwatch />,
          },
          {
            title: "Active recall",
            desc: "Test yourself instead of re-reading — doubles long-term memory.",
            icon: <TiTickOutline />,
          },
          {
            title: "Spaced repetition",
            desc: "Review material at increasing intervals to lock in memory.",
            icon: <FaCircleNodes/>,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-700 rounded-xl p-6 hover:border-purple-500 transition"
          >
            <div className="text-4xl mb-3 bg-gray-400 rounded-2xl p-3 w-15 h-15 text-purple-600">{item.icon}</div>
            <h2 className="font-semibold text-lg">{item.title}</h2>
            <p className="text-gray-400 text-sm mt-1">
              {item.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </div>
  
  );
};

export default LearningTips;