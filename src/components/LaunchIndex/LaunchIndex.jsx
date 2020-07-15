import React from "react";
import { Link } from "react-router-dom";
import styles from "./LaunchIndex.module.css";
import shoes from "../../Public/shoes";

function LaunchIndex() {
  return (
    <ul className={styles.ul}>
      {Object.entries(shoes).map(([key, { name, img }]) => (
        <li key={key}>
          <Link to={`/launch/${key}`}>
            <h3>{name}</h3>
            <img src={img} alt={name} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default LaunchIndex;
