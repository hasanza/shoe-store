import React from "react";
import styles from "./Launch.module.css";
import { Link, Outlet } from "react-router-dom";

function Launch() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Launch;
