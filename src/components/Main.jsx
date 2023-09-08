import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Main = () => {
  return (
    <div className="" id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1] brightness-50"
        src="./src/assets/images/cr02.jpg"
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/20">
        <div className="relative  pl-200 ">
          <img
            className="absolute -top-5 -left-20 w-60 pl-14 "
            src="./src/assets/images/logo03.png"
            alt="/"
          />
          <h1 className="absolute top-[70px] left-40 sm:text-5xl text-3xl text-slate-200 font-Exo">
            Luis Fernando Díaz M.
          </h1>
          <h3 className="absolute top-[220px] left-40 sm:text-2xl  font-extralight text-slate-200">
            Programador FrontEnd
          </h3>
          <ul className="absolute top-[255px] left-[182px] sm:text-xl  font-extralight text-slate-200 list-disc">
            <li>Html - CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>Tailwind</li>
          </ul>
        </div>

        <div className="absolute top-20 flex justify-between mt-96 p-3 max-w-[200px] w-full border border-stone-700    max-sm:flex max-sm:flex-row max-sm:justify-between max-sm:left-[20%]  sm:left-[75%]     ">
          <a href="https://twitter.com/LUIFERCAT007" target="_blank">
            <FaTwitter className="cursor-pointer  fill-red-700" size={20} />
          </a>
          <a href="https://www.facebook.com/luifercat" target="_blank">
            <FaFacebookF className="cursor-pointer fill-red-700" size={20} />
          </a>
          <a
            href="https://www.instagram.com/luifercatluifercat"
            target="_blank"
          >
            <FaInstagram className="cursor-pointer fill-red-700" size={20} />
          </a>
          <a href="https://www.facebook.com/luifercat" target="_blank">
            <FaLinkedinIn className="cursor-pointer fill-red-700" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Main;
