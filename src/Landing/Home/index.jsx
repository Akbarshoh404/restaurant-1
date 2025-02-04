import React from "react";

import styles from "./style.module.scss";
import Navbar from "../../Layout/Navbar";
import Header from "./Header";
import Section1 from "./Section1";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Section1 />
    </>
  );
};

export default Home;
