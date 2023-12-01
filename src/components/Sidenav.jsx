import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { BsPerson, BsPersonWorkspace } from "react-icons/bs";
//import { GrProjects } from "react-icons/gr";

const Sidenav = () => {
  const [nav, setnav] = useState(false);

  const handleNav = () => {
    setnav(!nav);
    console.log("state change");
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className=" fixed top-4 right-4 z-[99] md:hidden fill-red-600"
      />

      <a
        href="https://api.whatsapp.com/send/?phone=+573113470120"
        className="fixed top-4 right-4 z-[99] md:hidden mt-6"
        target="_block"
      >
        <AiOutlineWhatsApp className=" fill-green-400 hover:fill-red-700 animate-ping motion-reduce:invisible" />
      </a>

      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[30%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in  duration-200  h-14"
          >
            <AiOutlineHome className=" fill-cyan-700 " size={20} />
            <span className="pl-4">home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[30%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in  duration-200"
          >
            <BsPersonWorkspace className=" fill-cyan-700" size={20} />
            <span className="pl-4">work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[30%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in  duration-200"
          >
            <AiOutlineProject className=" fill-cyan-700" size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="https://www.linkedin.com/in/luisfernandodiazmendoza/"
            target="_blank"
            className="w-[30%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in  duration-200"
          >
            <BsPerson className=" fill-cyan-700" size={20} />
            <span className="pl-4">Resumeee</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[30%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in  duration-200 "
          >
            <AiOutlineMail
              className=" fill-cyan-700 hover:fill-red-700"
              size={20}
            />
            <span className="pl-4 ">Contact</span>
          </a>
          <a
            onClick={handleNav}
            href="https://api.whatsapp.com/send/?phone=+573113113470120"
            target="_blank"
            className="w-[30%] flex justify-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in  duration-200 "
          >
            <AiOutlineWhatsApp
              className=" fill-cyan-700 hover:fill-red-700"
              size={20}
            />
            <span className="pl-4 ">WhatsApp</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col custom-neum">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer  custom-neum"
          >
            <AiOutlineHome
              className=" fill-cyan-700 hover:fill-red-700"
              size={20}
            />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer custom-neum"
            /*className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300 custom-neum"   */
          >
            <BsPersonWorkspace
              className=" fill-cyan-700 hover:fill-red-700"
              size={20}
            />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer custom-neum"
          >
            <AiOutlineProject
              className="fill-cyan-700 hover:fill-red-700"
              size={20}
            />
          </a>
          <a
            //href="#main"
            href="https://1drv.ms/b/s!Ajbk-aYOsmphqPoYCtEhwoDLpgrIbA?e=AeE0iE"
            target="_blank"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer custom-neum"
            title="C. V."
          >
            <BsPerson className=" fill-cyan-700 hover:fill-red-700" size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer custom-neum"
          >
            <AiOutlineMail
              className=" fill-cyan-700 hover:fill-red-700"
              size={20}
            />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=+573113113470120"
            title="WhatsApp
            "
            target="_blank"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer custom-neum "
          >
            <AiOutlineWhatsApp
              className=" fill-cyan-700 hover:fill-red-700 hover:f animate-pulse"
              size={20}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Sidenav;
