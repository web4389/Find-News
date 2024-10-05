import React from "react";
import { useDarkMode } from "./DarkModeContext";

const Newsitems = (props) => {
  const { darkMode } = useDarkMode();
  const { Colors } = props;
  return (
    <div
      className={`card bg-transparent ${darkMode && "border-zinc-800"} my-3`}
    >
      <div style={{ display: "flex", position: "absolute", right: 0 }}>
        <span className="badge rounded-pill bg-danger font-mono">
          {props.source}
        </span>
      </div>
      <img
        src={
          props.imgurl
            ? props.imgurl
            : "https://g.foolcdn.com/editorial/images/740368/stack-of-one-hundred-dollar-bills-cash-money-stimulus-invest-retire-getty.jpg"
        }
        className="card-img-top h-[222px] object-cover w-[395px]"
        alt="..."
      />

      <div className="card-body">
        <h5 className="card-title font-bold" style={Colors.h1}>
          {props.ti}...
        </h5>
        <p className="card-text" style={Colors.p}>
          {props.des}...
        </p>
        <p className="card-text" style={Colors.p}>
          <small className="" style={Colors.p}>
            By {props.author ? props.author : "Unknown"} On{" "}
            {new Date(props.date).toDateString()}
          </small>
        </p>
        <div className="pt-[8px] pb-1 flex justify-end">
          <a
            href={props.detailurl}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-sm ${
              darkMode
                ? "bg-zinc-100 hover:bg-zinc-300 text-gray-900"
                : "bg-gray-900 hover:bg-gray-800 text-white"
            } transition duration-200 font-mono`}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitems;
