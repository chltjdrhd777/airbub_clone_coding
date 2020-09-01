import React, { useState } from "react";
import "../css/Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";

function Banner() {
  const [slideShow, setSlideShow] = useState(false);

  return (
    <div className="banner">
      <div className="banner_search">
        {slideShow && <Search />}
        <Button
          variant="outlined"
          className="banner_searchButton"
          onClick={() => setSlideShow(!slideShow)}
        >
          {slideShow ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Travel your life, enjoy your fun, just do it</h1>
        <h5>it is a clon airbub homepage</h5>
        <Button variant="outlined">Explore nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
