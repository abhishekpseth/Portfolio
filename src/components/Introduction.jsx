import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Button from "./Button";
import Navbar from "./Navbar";

const Introduction = () => {
  return (
    <>
      <Navbar />
      <main className="h-[83vh] grid place-content-center">
        <div className="flex flex-col justify-center items-center gap-8 text-center lg:flex-row">
          <img
            src="././images/profile-pic.JPG"
            alt="File Picture"
            className="h-[250px] w-[250px] rounded-full lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px]"
          />
          <div className="flex flex-col gap-[4px]">
            <p className="text-gray font-medium">Hello, I'm</p>
            <h1 className="font font-semibold text-[26px] sm:text-4xl dark:text-white">
              Abhishek Prasad Seth
            </h1>
            <h2 className="text-gray font font-semibold text-[24px] sm:text-[28px]">
              Frontend Developer
            </h2>
            <div className="flex gap-4 justify-center items-center">
              <Button
                section="introduction"
                text="Download CV"
                color="white"
                link="https://drive.google.com/file/d/1y7kVzO8NGRvfQ-hTbgmBHNndqIWbcUzf/view?usp=drive_link"
                target="_blank"
              />

              <Button
                section="introduction"
                text="Contact Info"
                color="dark"
                link="#contact"
                target=""
              />
            </div>
            <div className="flex gap-4 justify-center items-center dark:text-white">
              <a
                href="https://www.linkedin.com/in/abhishek-p-seth/"
                target="_blank"
              >
                <FaLinkedin className="text-5xl overflow-clip" />
              </a>
              <a href="https://github.com/abhishekpseth" target="_blank">
                <FaGithub className="text-5xl overflow-clip" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Introduction;
