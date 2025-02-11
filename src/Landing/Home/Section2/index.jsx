import React, { useState } from "react";
import styles from "./style.module.scss";

import burgerImg from "../../../Data/Images/Burgers/image.png";

const products = [
  {
    id: 1,
    type: "burger",
    title: "Classic Cheeseburger",
    desc: "Juicy beef patty with cheese, lettuce, and tomato.",
    price: "$5.99",
    img: burgerImg,
  },
  {
    id: 2,
    type: "hotdog",
    title: "Grilled Hotdog",
    desc: "Served with mustard, ketchup, and onions.",
    price: "$3.99",
    img: burgerImg,
  },
  {
    id: 3,
    type: "drink",
    title: "Cola",
    desc: "Refreshing cold cola.",
    price: "$1.99",
    img: burgerImg,
  },
  {
    id: 4,
    type: "salad",
    title: "Caesar Salad",
    desc: "Crispy romaine with Caesar dressing and croutons.",
    price: "$4.99",
    img: burgerImg,
  },
  {
    id: 5,
    type: "snack",
    title: "French Fries",
    desc: "Crispy golden fries.",
    price: "$2.99",
    img: burgerImg,
  },
];

const categories = ["all", "burger", "hotdog", "drink", "salad", "snack"];

const Section2 = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.type === selectedCategory);

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sorting}>
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? styles.active : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className={styles.cards}>
          {filteredProducts.map((product) => (
            <div key={product.id} className={styles.card}>
              <img
                src={product.img}
                alt={product.title}
                className={styles.image}
              />
              <h3 className={styles.title}>{product.title}</h3>
              <p className={styles.desc}>{product.desc}</p>
              <span className={styles.price}>{product.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
