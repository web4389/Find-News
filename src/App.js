import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { Routes, Route, useLocation } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useDarkMode } from "./Components/DarkModeContext";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const pagesize = 15;
  const [progress, setprogress] = useState(0);
  const apikey = process.env.REACT_APP_NEWS_API;

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
                apikey={apikey}
                key="general"
                pageSize={pagesize}
                country={"us"}
                category={"general"}
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
          <Route
            path="/*"
            element={
              <News
                setprogress={setprogress}
                apikey={apikey}
                key="general"
                pageSize={pagesize}
                country={"us"}
                category={"general"}
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                setprogress={setprogress}
                apikey={apikey}
                key="business"
                pageSize={pagesize}
                country={"us"}
                category={"business"}
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                setprogress={setprogress}
                apikey={apikey}
                key="entertainment"
                pageSize={pagesize}
                country={"us"}
                category={"entertainment"}
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                setprogress={setprogress}
                apikey={apikey}
                key="health"
                pageSize={pagesize}
                country={"us"}
                category={"health"}
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                setprogress={setprogress}
                apikey={apikey}
                key="science"
                pageSize={pagesize}
                country={"us"}
                category={"science"}
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                setprogress={setprogress}
                apikey={apikey}
                key="sports"
                pageSize={pagesize}
                country={"us"}
                category={"sports"}
                Colors={darkMode ? ColorsDarkMode : ColorsWhiteMode}
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                setprogress={setprogress}
                apikey={apikey}
                key="technology"
                pageSize={pagesize}
                country={"us"}
                category={"technology"}
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
