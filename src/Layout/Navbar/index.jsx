import React, { useState } from "react";

import styles from "./style.module.scss";

import { Link } from "react-router-dom";
import Logo from "../../components/icons/logo.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.menu}>
            <p>Welcome</p>
            <p>Our Menu</p>
            <p>Franchise</p>
            <p>Contact</p>

            <button className={styles.menuButton} onClick={toggleDrawer}>
              ☰
            </button>
          </div>

          <div className={styles.logo}>
            <img src={Logo} alt="" />
          </div>

          <div className={styles.cartDiv}></div>

          <div
            className={`${styles.drawer} ${isDrawerOpen ? styles.open : ""}`}
          >
            <button className={styles.closeButton} onClick={toggleDrawer}>
              ✕
            </button>
            <p>Welcome</p>
            <p>Our Menu</p>
            <p>Franchise</p>
            <p>Contact</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
