import { FaFacebookF } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="flex md:h-[600px] gap-5 md:flex-row flex-col-reverse p-4 md:p-0">
          <div className="w-full md:w-3/5 flex md:flex-col justify-center">
            <div>
              <div className="flex items-center gap-1 "><hr className="w-4 border-[#327A56]"/> <span className="text-[#64F4AB] pop text-base  ">Introducing</span></div>
              <div className="space-y-3 flex flex-col justify-center">
                <h1 className="mon md:text-7xl text-2xl text-white ">Hello</h1>
                <h1 className="mon md:text-6xl text-2xl text-white font-semibold ">I&apos;m <span>
                  <Typewriter cursor cursorColor="#64F4AB" words={["Arif Hossain Aslam", "Web Developer", "React Developer","MERN STACK",'UI/UX Developer']}
                     loop={false}/> 
                  </span> </h1>
                <p className="text-gray-300 text-lg">Feel comfortable learning and exploring coding and technology. And because of the passion and love for coding and technology, choosing this sector as a career.</p>
                <div>
                  <div className="flex items-center gap-1">
                  <hr className="w-4 border-[#327A56]"/> <p className="satis text-[#64F4AB] underline text-xl"> Contact With me</p>
                  </div>
                  
                  <div className="flex gap-2 h-20 items-center">
                  <a href="https://www.linkedin.com/in/arif-hossain-aslam/" target="_blank" className="w-[50px] h-[50px] flex justify-center items-center rounded-xl shadow-[#1e9bff]  shadow-sm hover:-translate-y-2 duration-500" ><FiLinkedin className="text-2xl " /></a>
                  <a href="https://github.com/ASLAM-stack" className="w-[50px] h-[50px] flex justify-center items-center rounded-xl shadow-[#1e9bff]  shadow-sm hover:-translate-y-2 duration-500" target="_blank"> <IoLogoGithub  className="text-2xl"/></a>
                  <a href="https://www.facebook.com/arifhossain.aslam/" className="w-[50px] h-[50px] flex justify-center items-center rounded-xl shadow-[#1e9bff]  shadow-sm hover:-translate-y-2 duration-500" target="_blank"><FaFacebookF  className="text-2xl"/></a>
                  
               
                
                </div>
                </div>

              </div>
            </div>
             
          </div>
          <div id="profile_pic" className="bg-[url('/green-border-2.png')] bg-no-repeat w-full md:w-2/5 bg-bottom bg-cover flex justify-center items-end">
          <div className="mask mask-circle flex justify-center items-center">
          <img className="" src="/Aslam.jpg" alt="" />
          </div>
          </div>
        </div>
         
      </div>
    </div>
  );
};

export default Banner;
