import React from "react";

import styles from "./style.module.scss";

import img from "../../../components/images/cooker.png";

const Section1 = () => {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.texts}>
            <p className={styles.p1}>Why We are Best Food Maker</p>
            <p className={styles.p2}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem scrambled it to make a type specimen book.
            </p>
          </div>

          <div className={styles.module}>
            <p>
              It is a long established fact that a reader will be distracted
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              English. Many desktop publishing packages and web page editors now
              use Lorem Ipsum as their default model text, and a search for
              'lorem ipsum' will uncover many web sites still in their infancy.
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose It is a long established fact that
              a reader will be distracted by the readable content of a page when
              looking at its layout. The normal distribution of letters, as
              opposed to using 'Content Many desktop publishing packages and web
              page editors search for 'lorem ipsum' will uncover many web sites
              still in humour and the like. Read More
            </p>

            <img src={img} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section1;
