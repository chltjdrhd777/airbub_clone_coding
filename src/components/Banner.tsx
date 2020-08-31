import React from "react";
import "../css/Banner.css";
import { Button } from "@material-ui/core";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__info">
        <h1>Travel your life, enjoy your fun, just do it</h1>
        <h5>it is a clon airbub homepage</h5>
        <Button variant="outlined">Explore nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
