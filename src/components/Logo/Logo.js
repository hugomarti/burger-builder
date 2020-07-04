import React from "react";

import classes from "./Logo.css";

import buergerLogo from "../../assets/images/burger-logo.png";

const Logo = (props) => {
  return (
    <div className={classes.Logo} style={{ height: props.height }}>
      <img src={buergerLogo} alt="burger-logo" />
    </div>
  );
};

export default Logo;
