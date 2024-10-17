import React, { useState, useEffect } from "react";
import Newsitems from "./Newsitems";
import CardsSkeleton from "./CardsSkeleton";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDarkMode } from "./DarkModeContext";

const News = (props) => {
  const { data } = props;
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [pageSize, setpageSize] = useState(15);
  const [parData, setparData] = useState(0);

  const capi = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const updateNews = async () => {
    props.setprogress(50);
    setloading(true);
    props.setprogress(70);
    setparData(data.totalResults);
    props.setprogress(80);
    const PaginatedArticles = data.articles.slice(0, pageSize);
    setarticles(PaginatedArticles);
    setloading(false);
    props.setprogress(100);
  };

  useEffect(() => {
    document.title = `${capi(props.category)} - Find News`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const PaginatedArticles = data.articles.slice(0, pageSize + 15);
    setarticles(PaginatedArticles);
    setpageSize(pageSize + 15);
  };

  const { Colors } = props;
  const { darkMode } = useDarkMode();

  const content = {
    whileInView: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const MainHeading = {
    initial: { y: -20, opacity: 0 },
    whileInView: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.6,
      },
    },
  };
  const Cards = {
    initial: { x: -20, opacity: 0 },
    whileInView: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div
        style={Colors.bg}
        variants={content}
        animate="whileInView"
        initial="initial"
        viewport={{ once: true }}
      >
        <motion.h1
          variants={MainHeading}
          viewport={{ once: true }}
          id="news"
          style={Colors.h1}
          className="text-center pb-[40px] px-3 pt-[90px] text-2xl font-medium text-gray-900 font-mono"
        >
          Read News - Top {capi(props.category)} HeadLines
        </motion.h1>
        {loading && <CardsSkeleton />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== parData}
          loader={<CardsSkeleton />}
        >
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 place-items-center content-center">
              {articles.map((e) => {
                return (
                  e.urlToImage && (
                    <motion.div
                      variants={Cards}
                      viewport={{ once: true }}
                      className="col-md-4 mb-4 max-md:w-[315px] md:w-[100%] px-2"
                      key={e.url}
                    >
                      <Newsitems
                        ti={e.title ? e.title.slice(0, 30) : ""}
                        des={e.description ? e.description.slice(0, 80) : ""}
                        imgurl={e.urlToImage}
                        detailurl={e.url}
                        author={e.author ? e.author.slice(0, 20) : ""}
                        date={e.publishedAt}
                        source={e.source.name}
                        Colors={Colors}
                      />
                    </motion.div>
                  )
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </motion.div>
      <motion.div
        className={`fixed top-0 left-0 z-50 w-full h-screen ${
          darkMode ? "bg-zinc-800" : "bg-slate-50"
        } origin-bottom`}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className={`fixed top-0 left-0 z-50 w-full h-screen ${
          darkMode ? "bg-zinc-800" : "bg-slate-50"
        } origin-top`}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

News.defaultProps = {
  pageSize: 5,
  country: "us",
  category: "general",
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
