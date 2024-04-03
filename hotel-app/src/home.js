import React, { Component } from "react";
import { useState } from "react";
import Banner from "./components/Banner";
import Services from "./components/Services";
import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Rooms from "./components/routes/Rooms";


class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Hero>
          <Banner
            title="luxurious rooms"
            subtitle="deluxe rooms starting at 50/Hr."
          >
            <Link to="/#room" className="btn-primary">
              Our Rooms
            </Link>
          </Banner>
        </Hero>

        <Services />
      </div>
    );
  }
  
}

export default Home;
