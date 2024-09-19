import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pagesize = 15;
  const [progress, setprogress] = useState(0);
  const apikey = process.env.REACT_APP_NEWS_API;
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setprogress={setprogress}
                apikey={apikey}
                key="general"
                pageSize={pagesize}
                country={"us"}
                category={"general"}
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
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
