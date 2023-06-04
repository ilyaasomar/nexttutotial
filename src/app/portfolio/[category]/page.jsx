import React from "react";
import styles from "./page.module.css";
const Category = ({ params }) => {
  console.log(params);

  return (
    <div className={styles.container}>
      <h1>{params.category}</h1>
    </div>
  );
};

export default Category;
