import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useDarkMode } from "./DarkModeContext";
import { motion } from "framer-motion";
import Logo from "../Images/Logo.png";
import LogoDark from "../Images/LogoDark.png";

const Footer = ({ Colors }) => {
  const { darkMode } = useDarkMode();

  return (
    <footer style={Colors.bg}>
      <div className="w-full flex flex-col items-center text-center max-sm:px-[18px] sm:px-8 lg:px-14 overflow-hidden">
        <div className="w-[100%] px-3 justify-between flex items-center py-[16px]">
          <motion.p
            style={Colors.h1}
            className={`text-xl font-semibold`}
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
          >
            {darkMode ? (
              <img src={LogoDark} alt="Logo" className="w-[53px]" />
            ) : (
              <img src={Logo} alt="Logo" className="w-[53px]" />
            )}
          </motion.p>

          <motion.ul
            className="text-[32px] flex justify-center gap-x-3"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              ease: [0.6, -0.05, 0.01, 0.99],
              delay: 0.3,
            }}
          >
            <motion.a
              href="https://www.linkedin.com/in/shilok-k/"
              target="_blank"
            >
              <FaLinkedin
                className="hover:!scale-125 text-gray-800 transition duration-300"
                style={Colors.SocialMediaIcons}
              />
            </motion.a>
            <motion.a href="https://github.com/web4389" target="_blank">
              <FaGithub
                className="hover:!scale-125 text-gray-800 transition duration-300"
                style={Colors.SocialMediaIcons}
              />
            </motion.a>
          </motion.ul>
        </div>
        <div
          className={`w-full h-[1px] ${
            darkMode ? "bg-[#292929]" : "bg-[#c2c2c2]"
          } px-10 opacity-50 rounded`}
        ></div>

        <motion.p
          className="text-gray-800 max-sm:text-[14px] text-[15px] py-[16px] font-mono"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: darkMode ? 0.75 : 0.9 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            ease: [0.6, -0.05, 0.01, 0.99],
            delay: 0.6,
          }}
          style={Colors.p}
        >
          © 2024 | Find News™ | Shilok kumar
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
