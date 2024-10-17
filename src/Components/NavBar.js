import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useDarkMode } from "./DarkModeContext";
import "../css/navbar.css";
import Logo from "../Images/Logo.png";

const NavBar = ({ Colors }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();
  const location = useLocation();

  const Links = [
    {
      locationPathname: "/",
      Name: "Home",
    },
    {
      locationPathname: "/business",
      Name: "Business",
    },
    {
      locationPathname: "/entertainment",
      Name: "Entertainment",
    },
    {
      locationPathname: "/health",
      Name: "Health",
    },
    {
      locationPathname: "/science",
      Name: "Science",
    },
    {
      locationPathname: "/sports",
      Name: "Sports",
    },
    {
      locationPathname: "/technology",
      Name: "Technology",
    },
  ];

  return (
    <>
      <header
        className={`lg:px-12 max-md:px-0 py-[3px] ${
          isOpen ? "" : "shadow-md"
        } w-[100%] fixed top-0 z-10 bg-zinc-950 overflow-x-hidden`}
        style={Colors.bg}
      >
        <nav
          className={`container mx-auto px-6 py-[13px] flex justify-between items-center overflow-hidden`}
        >
          <motion.div
            initial={{ opacity: 0, translateX: -100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.2, delay: 0.7 }}
            className="overflow-hidden"
          >
            <Link
              to="/"
              className={`${darkMode ? "text-white" : "text-gray-600"} `}
            >
              <img src={Logo} alt="Logo" className="w-[80px]" />
            </Link>
          </motion.div>
          <motion.div
            className="flex lg:hidden hover:cursor-pointer overflow-hidden"
            initial={{ opacity: 0, translateX: 100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.2, delay: 0.7 }}
          >
            <div
              onClick={() => setIsOpen(!isOpen)}
              className={`${
                darkMode ? "text-white" : "text-gray-800"
              }  focus:outline-none`}
            >
              <svg
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 1 }}
            className={`${
              darkMode ? "text-zinc-200 bg-[#09090b]" : "bg-white text-gray-800"
            } flex flex-row space-x-4 shadow-none max-lg:hidden overflow-hidden`}
            id="links"
          >
            {Links.map((e) => {
              return (
                <Link
                  key={e.locationPathname}
                  className={`px-[4px] ${
                    darkMode ? "hover:text-white" : "hover:text-gray-950"
                  }  hover:scale-110 transition duration-100 cursor-pointer ${
                    location.pathname === e.locationPathname
                      ? `${
                          darkMode ? "text-white" : "text-gray-950"
                        } font-semibold scale-105`
                      : ""
                  }`}
                  aria-current="page"
                  to={e.locationPathname}
                >
                  {e.Name}
                </Link>
              );
            })}
          </motion.div>
          <motion.input
            initial={{ opacity: 0, translateX: 100 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.2, delay: 0.7 }}
            type="checkbox"
            className="theme-checkbox max-lg:hidden overflow-hidden"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </nav>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 1 }}
          className={`${
            isOpen
              ? `flex ${
                  darkMode
                    ? "text-[#e4e4e4] bg-[#09090b]"
                    : "bg-white text-gray-800"
                }  pb-[10px]`
              : `hidden`
          } sticky z-50 items-center flex-col !shadow-md w-full lg:hidden overflow-x-hidden`}
          id="links"
        >
          {Links.map((e) => {
            return (
              <Link
                key={e.locationPathname}
                className={`py-[12px] ${
                  darkMode ? "hover:text-white" : "hover:text-gray-950"
                }  hover:scale-110 transition duration-100 cursor-pointer ${
                  location.pathname === e.locationPathname
                    ? `${
                        darkMode ? "text-white" : "text-gray-950"
                      } font-semibold scale-105`
                    : ""
                }`}
                aria-current="page"
                to={e.locationPathname}
              >
                {e.Name}
              </Link>
            );
          })}

          <div className="py-3">
            <motion.input
              initial={{ opacity: 0, translateX: 100 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.2, delay: 0.7 }}
              type="checkbox"
              className="theme-checkbox overflow-hidden"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          </div>
        </motion.div>
      </header>
    </>
  );
};

export default NavBar;
