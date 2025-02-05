import React from "react";

import styles from "./style.module.scss";

const Section4 = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <p className={styles.title}>
            Start The Adventure Today And Become a Franchisee
          </p>

          <p className={styles.p1}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <button className={styles.button}>
            Become a Franchisee
          </button>
        </div>
      </div>
    </>
  );
};

export default Section4;
