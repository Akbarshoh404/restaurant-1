import React from "react";

import styles from "./style.module.scss";

const Section6 = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <p className={styles.title}>For more Support</p>

          <div className={styles.div}>
            <input type="text" placeholder="Enter Email"/>

            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;
