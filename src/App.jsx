import { useEffect, useState } from "react";
import {
  Navbar,
  Introduction,
  About,
  Experience,
  Skills,
  Projects,
  ContactArea,
  Footer,
} from "./components";
import { ThemeProvider } from "./contexts/theme";
import GridBackgroundTheme from "./components/GridBackgroundTheme";

const App = () => {
  const [themeMode, setThemeMode] = useState("dark");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    const html = document.querySelector("html");
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      {themeMode === "dark" && <GridBackgroundTheme />}

      <div className="min-h-screen bg-bg text-ink dark:bg-transparent">
        <Navbar />

        <section id="home">
          <Introduction />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <ContactArea />
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
