import React from "react";
import { Link } from "react-scroll";
import { useDarkMode } from "./DarkModeContext";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = ({ Colors }) => {
  const { darkMode } = useDarkMode();
  const location = useLocation();
  const headlines = {
    general:
      "Your source for breaking news, top stories, and the latest updates from around the world. Take a breath, soak up the headlines!",
    bussines:
      "Get the latest business news, market insights, and financial trends shaping the global economy.",
    entertainment:
      "Catch up on the hottest entertainment news, celebrity gossip, and trending movies and shows.",
    health:
      "Stay informed with the latest health news, wellness tips, and medical breakthroughs.",
    science:
      "Discover the latest science news, groundbreaking research, and innovations shaping our world.",
    sports:
      "Get the latest sports news, live scores, and updates on your favorite teams and athletes.",
    technology:
      "Stay ahead with the latest technology news, cutting-edge innovations, and industry trends.",
  };

  const content = {
    animate: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const MainHeading = {
    initial: { x: -50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 1.2,
      },
    },
  };

  const Para = {
    initial: { x: 50, opacity: 0 },
    animate: {
      x: 0,
      opacity: darkMode ? 0.75 : 0.9,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 1.2,
      },
    },
  };
  const Buttons = {
    initial: { y: 50, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 1.2,
      },
    },
  };

  return (
    <div className="hero pt-52 pb-40 overflow-x-hidden" style={Colors.bg}>
      <div className="hero-content text-center w-full flex justify-center items-center">
        <motion.div
          className="max-w-md"
          variants={content}
          animate="animate"
          initial="initial"
        >
          <motion.h1
            className="text-5xl font-bold"
            variants={MainHeading}
            style={Colors.h1}
          >
            Find News
          </motion.h1>
          <motion.p
            className="py-6 max-md:px-3"
            style={Colors.p}
            variants={Para}
          >
            {location.pathname === "/"
              ? headlines.general
              : location.pathname === "/business"
              ? headlines.bussines
              : location.pathname === "/entertainment"
              ? headlines.entertainment
              : location.pathname === "/health"
              ? headlines.health
              : location.pathname === "/science"
              ? headlines.science
              : location.pathname === "/sports"
              ? headlines.sports
              : location.pathname === "/technology"
              ? headlines.technology
              : headlines.general}
          </motion.p>

          <motion.div className="animate-bounce mt-2" variants={Buttons}>
            <Link
              to="news"
              spy={true}
              smooth={true}
              duration={500}
              className={`rounded px-[13px] py-[7px] ${
                darkMode
                  ? "bg-zinc-100 text-gray-900"
                  : "bg-gray-900 text-white"
              } cursor-pointer`}
            >
              Read News
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
