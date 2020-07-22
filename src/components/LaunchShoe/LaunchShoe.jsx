import React from "react";
import shoes from "../../Public/shoes";
import { useParams } from "react-router-dom";
import styles from "./LaunchShoe.module.css";

function LaunchShoe() {
  const { key } = useParams();
  const shoe = shoes[key];
  if (!shoe) {
    return <h1>Shoe not found...</h1>;
  }
  const { name, img } = shoe;
  return (
    <div>
      <div className={styles.shoe}>
        <h2>{name}</h2>
        <img src={img} alt={name} />
      </div>
    </div>
  );
}

export default LaunchShoe;
