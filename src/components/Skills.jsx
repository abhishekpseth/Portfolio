import { BsPersonWorkspace } from "react-icons/bs";
import { HiAcademicCap } from "react-icons/hi2";
import { FaCircleCheck } from "react-icons/fa6";
import SkillItem from "./SkillItem";
import { useContext } from "react";
import useTheme, { ThemeProvider } from "../contexts/theme";

const Skills = () => {
  const skillsList = [
    {
      skill: "HTML",
      rating: "Experienced",
    },
    {
      skill: "CSS",
      rating: "Experienced",
    },
    {
      skill: "JS",
      rating: "Intermediate",
    },
    {
      skill: "React",
      rating: "Beginner",
    },
    {
      skill: "GIT",
      rating: "Intermediate",
    },
  ];

  const { themeMode } = useTheme();

  return (
    <div className="flex flex-col dark:my-[120px] dark:xl:my-[150px]">
      {themeMode === "light" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="z-[-10] w-screen scale-y-105"
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,192L80,181.3C160,171,320,149,480,165.3C640,181,800,235,960,240C1120,245,1280,203,1360,181.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      )}
      <div className="xl:absolute w-full h-full grid place-content-center bg-[#0099ff] dark:bg-transparent xl:bg-transparent">
        <div className="relative flex flex-col justify-center items-center md:items-start gap-[100px] md:flex-row  dark:text-white">
          <div className="w-[80%] md:w-[50%]">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-[16px] sm:text-[20px]">Get to know More</p>
              <h1 className="text-3xl sm:text-5xl font-bold text-white">
                About Me
              </h1>
            </div>

            <div className="flex flex-col justify-center  items-center gap-[60px] mt-[40px]">
              <div className="w-[90%] py-[20px] px-[20px] flex flex-col justify-center items-center text-center border border-1 border-white rounded-2xl">
                <div className="text-textLight">
                  <BsPersonWorkspace />
                </div>
                <h3 className="font-bold text-textLight">Experience</h3>
                <p>Fresher</p>
                <p>Frontend Developer</p>
              </div>

              <div className=" w-[90%] py-[20px] flex flex-col justify-center items-center text-center border border-1 border-white rounded-2xl">
                <div className="text-white">
                  <HiAcademicCap />
                </div>
                <h3 className="font-bold text-textLight">Education</h3>
                <p>B.Tech</p>
                <p>Motilal Nehru National Institute of Technology</p>
              </div>
            </div>
          </div>

          <div className="w-[100%] md:w-[50%] ">
            <div className="flex flex-col justify-center items-center text-center">
              <p className="text-[16px] sm:text-[20px]">Explore My</p>
              <h1 className="text-3xl sm:text-5xl font-bold text-white">
                Skills
              </h1>
            </div>

            <div className="flex justify-center">
              <div className="mt-[40px] gap-[40px] max-w-[95%]  text-center border border-1 border-white rounded-2xl px-[20%] py-[5%]">
                <div className="flex flex-col gap-[20px] py-[20%]">
                  {skillsList.map((skill, index) => (
                    <SkillItem
                      key={index}
                      skill={skill.skill}
                      rating={skill.rating}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0099ff] dark:bg-transparent hidden xl:block z-[-10] xl:relative w-screen h-[60vh]"></div>
      {themeMode === "light" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="z-[-10] w-screen scale-y-105"
        >
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,160L80,138.7C160,117,320,75,480,64C640,53,800,75,960,74.7C1120,75,1280,53,1360,42.7L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      )}
    </div>
  );
};

export default Skills;
