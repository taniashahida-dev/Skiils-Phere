'use client'

import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const MyProfile = () => {
  const { data: session, isPending } = authClient.useSession();
 
  const userData = session?.user;

  // ✅ Loading state
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }

  // ❌ If no user
  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-3xl text-purple-500">User not logged in</p>
      </div>
    );
  }

  return (

 




    <div className="min-h-[80vh] flex  justify-center  p-4">
      <motion.div
       whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 w-3/12 backdrop-blur-lg p-3 md:p-8 text-white rounded-2xl border border-white/10 overflow-hidden shadow-md hover:shadow-xl transition "
      >
        <div className="flex flex-col  items-center gap-4">
          
          <motion.div whileHover={{ scale: 1.1 }}>
            <Image
              src={userData.image || "/default-avatar.png"}
              width={100}
              height={100}
              alt={userData.name || "User"}
              className="rounded-full border-4 h-24 w-24 md:h-40 md:w-40 border-purple-400"
            />
          </motion.div>

    
          <h2 className="text-xl font-semibold border border-gray-300 hover:shadow-xl p-2 w-full rounded-2xl">
            Name : <span className="text-gray-400">{userData.name || "No Name"}</span>
          </h2>

          <p className="text-xl font-semibold border border-gray-300 hover:shadow-xl p-2 w-full rounded-2xl">
           Email: <span className="text-gray-400">{userData.email}</span>
          </p>

         <Link href={'/myprofile/update'}>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/my-profile/update')}
            className=" bg-purple-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-purple-600"
          >
            Update Profile
          </motion.button>
          </Link>

        </div>
      </motion.div>
    </div>
  );
};

export default MyProfile;