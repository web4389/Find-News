import React from "react";

const Newsitems = (props) => {
  return (
    <div className="card my-3">
      <div style={{ display: "flex", position: "absolute", right: 0 }}>
        <span className="badge rounded-pill bg-danger">{props.source}</span>
      </div>
      <img
        src={
          props.imgurl
            ? props.imgurl
            : "https://g.foolcdn.com/editorial/images/740368/stack-of-one-hundred-dollar-bills-cash-money-stimulus-invest-retire-getty.jpg"
        }
        className="card-img-top"
        alt="..."
      />

      <div className="card-body">
        <h5 className="card-title">{props.ti}...</h5>
        <p className="card-text">{props.des}...</p>
        <p className="card-text">
          <small className="text-body-secondary">
            By {props.author ? props.author : "Unknown"} On{" "}
            {new Date(props.date).toGMTString()}
          </small>
        </p>
        <a
          href={props.detailurl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm btn-dark"
        >
          More
        </a>
      </div>
    </div>
  );
};

export default Newsitems;
