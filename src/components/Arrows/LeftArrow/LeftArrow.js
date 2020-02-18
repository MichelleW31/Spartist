import React, { Component } from "react";
import styles from "./LeftArrow.module.scss";

const LeftArrow = () => {
  return (
    <div className={styles.LeftArrow}>
      <i className={styles.fa_angle_left}></i>
    </div>
  );
};

export default LeftArrow;
