"use client";
import { motion } from "framer-motion"
import Image from "next/image";
import { CiStar } from "react-icons/ci";

const TopInstrustor = () => {
    return (
          <div className="my-4 md:my-10 text-white w-11/12 md:w-10/12 mx-auto">
      
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Top instructors</h1>
        <p className="text-gray-400 text-sm">
          Learn from the best in their fields
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        
        {[
          { name: "Jhankar Mahbub", role: "Full-Stack Dev", courses: 12, rating: 4.9, image: "https://i.ibb.co/gMDxq3hR/1677507599579-e-2147483647-v-beta-t-Ls0z-B8-ECy-R1hp4iepkmh-X5a62n-P6-Tlhz-Cp1-ZEghic-I.jpg" },
          { name: "Ahashan Habib Utsho", role: "JavaScript Deep Dive", courses: 8, rating: 4.9, image: "https://i.ibb.co/SXmrq4TH/117377338-v-4.jpg" },
          { name: "Fahim Prodhan", role: "Advanced React Mastery", courses: 6, rating: 4.8, image: "https://i.ibb.co/JFr29Sbv/1703805951276-e-2147483647-v-beta-t-Oop-J6-Nrc-B5w-Xp-7c-KJh6u-CRJg-RMd-Njn-Cz67-IIis-Ik-IM.jpg" },
          { name: "Abdur Rakib", role: "Data Scientist", courses: 10, rating: 4.7, image: "https://i.ibb.co/KxCTR1Hq/1750676584597-e-2147483647-v-beta-t-Gmy-ARBr-Tr-Ad2s-S0-G2kq39-AV3reu-T-c-KXKZe-Mr3-Wp-Fw-A.jpg" },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="border border-gray-700 rounded-xl p-3 md:p-5 text-center hover:border-purple-500 transition"
          >
            
           <Image src= {item?.image} width={80} height={80} alt={item.name} className=" mx-auto  rounded-full">
           </Image>

            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-400 text-sm">{item.role}</p>

            <p className="text-purple-400 text-sm mt-2 flex gap-1 justify-center  items-center">
              {item.courses} courses • <CiStar />{item.rating}
            </p>
          </motion.div>
        ))}

      </div>
        </div>
    );
};

export default TopInstrustor;