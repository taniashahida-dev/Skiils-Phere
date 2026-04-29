import { FaFacebookF, FaGithub } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";


const Footer = () => {
    return (
        <div className="flex justify-between items-center p-4 bg-purple-950">
           <div className="space-y-4">
<div className="flex items-center gap-2 text-2xl">
        <span className="bg-purple-500 p-2 rounded-xl "><GrTechnology /></span>
        <h1 className="text-purple-600 font-bold">SkillSphere</h1>
      </div>
      <p className="text-gray-400">Empowering learners worldwide with quality <br /> skill-based education.
</p>
<div className="flex gap-5 items-center text-xl">
    <span className="bg-gray-500 p-2 rounded-2xl hover:bg-gray-400"><FaFacebookF /></span>
    <span className="bg-gray-500 p-2 rounded-2xl hover:bg-gray-400 "><ImLinkedin2 /></span>
    <span className="bg-gray-500 p-2 rounded-2xl hover:bg-gray-400"><FaGithub /></span>
</div>
           </div>


           <div className="text-gray-400 space-y-1">
            <h1 className="text-xl font-semibold text-white mb-1">Quick Links</h1>
            <p>Home</p>
            <p>Courses</p>
            <p>Instruntions</p>
            <p>Blogs</p>
           </div>

            <div className="text-gray-400 space-y-1">
            <h1 className="text-xl font-semibold text-white mb-1">Legal</h1>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
            <p>Contact Us</p>
          
           </div>
        </div>
    );
};

export default Footer;