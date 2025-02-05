import React from "react";

import styles from "./style.module.scss";

const Section3 = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <p className={styles.title}>We believe in making quality food</p>

          <div className={styles.cards}>
            <div className={styles.card}>
              <p className={styles.p1}>2M+</p>
              <p className={styles.p2}>Happy Customers</p>
            </div>

            <div className={styles.card}>
              <p className={styles.p1}>98%</p>
              <p className={styles.p2}>Customer Satisfaction</p>
            </div>

            <div className={styles.card}>
              <p className={styles.p1}>20+</p>
              <p className={styles.p2}>Our Branches</p>
            </div>

            <div className={styles.card}>
              <p className={styles.p1}>100+</p>
              <p className={styles.p2}>Total Employees</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
