import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useDarkMode } from "./Components/DarkModeContext";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import { AnimatePresence } from "framer-motion";
import NewsData from "./Components/Data";

const App = () => {
  const [progress, setprogress] = useState(0);
  const { darkMode } = useDarkMode();
  const location = useLocation();

  const ColorsDarkMode = {
    bg: {
      backgroundColor: "#09090b",
    },
    SocialMediaIcons: {
      color: "white",
    },
    h1: {
      color: "white",
    },
    p: {
      color: "white",
      opacity: 0.75,
    },
  };
  const ColorsWhiteMode = {
    bg: {
      backgroundColor: "white",
    },
    h1: {
      color: "rgb(31, 41, 55)",
    },
    p: {
      opacity: 0.9,
      color: "rgb(75, 85, 99)",
    },
  };

  return (
    <div className="overflow-x-hidden">
      <NavBar Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode} />
      <HeroSection Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode} />
      <LoadingBar color="#f11946" progress={progress} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            index
            element={
              <News
                setprogress={setprogress}
                data={NewsData.general}
                category="General"
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
          <Route
            path="/*"
            element={
              <News
                setprogress={setprogress}
                data={NewsData.general}
                category="General"
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setprogress={setprogress}
                category="Business"
                data={NewsData.business}
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setprogress={setprogress}
                category="Entertainment"
                data={NewsData.entertainment}
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setprogress={setprogress}
                data={NewsData.health}
                category="Health"
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setprogress={setprogress}
                data={NewsData.science}
                category="Science"
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setprogress={setprogress}
                data={NewsData.sports}
                category="Sports"
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setprogress={setprogress}
                data={NewsData.technology}
                category="Technology"
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
        </Routes>
      </AnimatePresence>

      <Footer Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode} />
    </div>
  );
};

export default App;
