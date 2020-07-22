import React from "react";
import { Link } from "react-router-dom";
import styles from "./LaunchIndex.module.css";
import shoes from "../../Public/shoes";

function LaunchIndex() {
  return (
    <div className={styles.list}>
      {Object.entries(shoes).map(([key, { name, img }]) => (
        <div key={key} class={styles.item}>
          <Link to={`/launch/${key}`} className={styles.element}>
            <h3>{name}</h3>
            <img src={img} alt={name} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default LaunchIndex;
