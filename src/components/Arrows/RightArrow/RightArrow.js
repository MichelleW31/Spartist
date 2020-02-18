import React, { Component } from "react";
import styles from "./RightArrow.module.scss";

const RightArrow = () => {
  return (
    <div className={styles.RightArrow}>
      <i className={styles.fa_angle_right}></i>
    </div>
  );
};

export default RightArrow;
