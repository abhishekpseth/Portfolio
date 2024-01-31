import { FaLinkedin } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";
import useTheme from "../contexts/theme";

const ContactArea = () => {
  const { themeMode } = useTheme();
  return (
    <div className="relative w-screen grid place-content-center">
      {themeMode === "light" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="z-[-10] w-screen absolute top-[-30vh]"
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,224L80,213.3C160,203,320,181,480,149.3C640,117,800,75,960,85.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      )}
      <nav className="flex flex-col justify-center items-center">
        <p className="text-black dark:text-white text-[16px] sm:text-[20px]">Get in Touch</p>
        <h1 className="text-3xl sm:text-5xl  font-bold text-textLight dark:text-white">
          Contact Me
        </h1>
      </nav>
      <main className="w-fit px-[16px] py-[16px] mt-[40px] flex flex-col gap-[10px] justify-center items-center border border-1 border-textLight rounded-[40px] dark:text-white mb-[10vh]">
        <div className="flex gap-[8px] items-center">
          <ImMail4 className="text-xl sm:text-4xl text-textLight dark:text-gray" />
          <h1 className="text-sm sm:text-2xl">abhishekpseth@gmail.com</h1>
        </div>

        <div className="flex gap-[8px] items-center">
          <FaLinkedin className="text-xl sm:text-4xl text-textLight dark:text-gray" />
          <h1 className="text-sm sm:text-2xl">abhishekpseth</h1>
        </div>
      </main>
      <div className="z-[-10] w-screen dark:hidden absolute top-[10vh] h-[32vh] bg-[#0099ff]"></div>
    </div>
  );
};

export default ContactArea;
