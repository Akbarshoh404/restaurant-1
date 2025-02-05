import React from "react";

import styles from "./style.module.scss";

import { comments } from "../../../Data/comments";

const Section5 = () => {
  return (
    <>
      <div className={styles.section}>
        <div className={styles.container}>
          <p className={styles.title}>What Our Clients Are Saying</p>
          <div className={styles.cards}>
            {comments.map((comment) => (
              <div key={comment.id} className={styles.card}>
                <div className={styles.imgDiv}>
                  <img
                    src={comment.img}
                    alt={comment.name}
                    className={styles.avatar}
                  />

                  <div>
                    <h3 className={styles.name}>{comment.name}</h3>
                    <p className={styles.job}>{comment.job}</p>
                    <p className={styles.stars}>
                      {"★".repeat(comment.star_count)}
                    </p>
                  </div>
                </div>
                <p className={styles.comment}>{comment.comments}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
