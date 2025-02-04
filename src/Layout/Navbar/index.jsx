import React from "react";

import styles from "./style.module.scss";

import { Link } from "react-router-dom";
import Logo from "../../components/icons/logo.png"

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.menu}>
            <p>Welcome</p>
            <p>Our Menu</p>
            <p>Franchise</p>
            <p>Contact</p>
          </div>

          <div className={styles.logo}>
            <img src={Logo} alt="" />
          </div>

          <div className={styles.cartDiv}></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
