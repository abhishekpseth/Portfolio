import { Introduction, Skills, ProjectArea, ContactArea } from "./components";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import GridBackgroundTheme from "./components/GridBackgroundTheme";

const App = () => {
  const [themeMode, setThemeMode] = useState("dark");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    // here theme changes
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      {themeMode === "dark" ? <GridBackgroundTheme /> : ""}
      <>
        <div className="dark:bg-transparent overflow-hidden">
          <section className="min-h-[100vh]">
            <Introduction />
          </section>

          <section id="about" className="relative">
            <Skills />
          </section>

          <section
            id="projects"
            className="px-[30px] lg:px-[130px] md:px-[60px] min-h-[100vh] flex flex-col items-center"
          >
            <ProjectArea />
          </section>

          <section
            id="contact"
            className="px-[30px] lg:px-[130px] md:px-[60px] h-[80vh] flex flex-col justify-end items-center"
          >
            <ContactArea />
          </section>
        </div>
      </>
    </ThemeProvider>
  );
};

export default App;
