import React from "react";

import styles from "./style.module.scss";
import Navbar from "../../Layout/Navbar";
import Header from "./Header";
import Section1 from "./Section1";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5"

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Section1 />

      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
};

export default Home;
