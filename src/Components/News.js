import React, { useState, useEffect } from "react";
import Newsitems from "./Newsitems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [parData, setparData] = useState(0);

  const capi = (s) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const updateNews = async () => {
    props.setprogress(60);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setprogress(70);
    let parsedData = await data.json();
    props.setprogress(80);
    setparData(parsedData.totalResults);
    setarticles(parsedData.articles);
    setloading(false);
    props.setprogress(100);
  };
  useEffect(() => {
    document.title = `${capi(props.category)} - Find News`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apikey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setpage(page + 1);
    setarticles(articles.concat(parsedData.articles));
  };
  return (
    <>
      <h1
        style={{ textAlign: "center", margin: "30px 0px", marginTop: "90px" }}
      >
        Read News - Top {capi(props.category)} HeadLines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== parData}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((e) => {
              return (
                <div className="col-md-4 mb-4" key={e.url}>
                  <Newsitems
                    ti={e.title ? e.title.slice(0, 40) : ""}
                    des={e.description ? e.description.slice(0, 80) : ""}
                    imgurl={e.urlToImage}
                    detailurl={e.url}
                    author={e.author}
                    date={e.publishedAt}
                    source={e.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  pageSize: 5,
  country: "us",
  category: "business",
};
News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};

export default News;
