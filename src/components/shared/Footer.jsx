"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-purple-950 text-white px-6 py-10"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 grid-cols-2 justify-between gap-10">
        
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4 text-center md:text-left"
        >
          <div className="flex items-center justify-center md:justify-start gap-2 text-2xl">
            <span className="bg-purple-500 p-2 rounded-xl">
              <GrTechnology />
            </span>
            <h1 className="text-purple-400 font-bold">
              SkillSphere
            </h1>
          </div>

          <p className="text-gray-400 text-sm">
            Empowering learners worldwide with quality <br />
            skill-based education.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 text-xl">
            {[FaFacebookF, ImLinkedin2, FaGithub].map((Icon, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="bg-gray-600 p-2 rounded-xl hover:bg-purple-500 cursor-pointer"
              >
                <Icon />
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center md:text-left"
        >
          <h1 className="text-lg font-semibold mb-2">Quick Links</h1>
          <ul className="space-y-1 text-gray-400 text-sm">
            {["Home", "Courses", "Instructions", "Blogs"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ x: 5, color: "#c084fc" }}
                className="cursor-pointer"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Legal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center md:text-left"
        >
          <h1 className="text-lg font-semibold mb-2">Legal</h1>
          <ul className="space-y-1 text-gray-400 text-sm">
            {["Terms and Conditions", "Privacy Policy", "Contact Us"].map(
              (item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5, color: "#c084fc" }}
                  className="cursor-pointer"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm"
      >
        © 2026 SkillSphere. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;