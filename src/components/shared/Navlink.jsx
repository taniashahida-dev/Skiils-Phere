"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Navlink = ({ href, children }) => {
  const path = usePathname();
  const isActive = href === path;

  return (
    <motion.div whileHover={{ y: -2 }}>
      <Link
        href={href}
        className={`${
          isActive
            ? "border-b border-b-purple-500 text-purple-600"
            : "text-gray-400"
        } text-lg font-semibold transition-all duration-200`}
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default Navlink;