import React from "react";

import styles from "./style.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <p className={styles.p1}>
            Welcome! <br />
            We Made Delicious <br />
            Food for You
          </p>

          <p className={styles.p2}>
            The Best Restaurant in Uzbekistan!
          </p>

          <button className={styles.button}>
            Order Online
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
