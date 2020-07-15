import React from "react";
import styles from "./LaunchShoe.module.css";
import shoes from "../../Public/shoes";
import { Link, useParams } from "react-router-dom";

function LaunchShoe() {
  const { key } = useParams();
  const shoe = shoes[key];
  if (!shoe) {
    return <h1>Shoe not found...</h1>;
  } 
  const {name, img} = shoe;
  return <div>
      <h2>{name}</h2>
      <img src={img} alt={name}/>
  </div>;
}

export default LaunchShoe;
