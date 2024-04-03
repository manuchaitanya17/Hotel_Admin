import React from "react";

function Hero(props) {
  return (
    <header className={props.hero || "defaultHero"}>{props.children}</header>
  );
}

export default Hero;
