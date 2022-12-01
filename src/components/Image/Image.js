import React from "react";
import styles from "./Image.module.scss";

const Image = (props) => {
  return (
    <div className={styles.Image_wrapper}>
      <img className={styles.Image} src={props.artist.images[0].url} />
    </div>
  );
};

export default Image;
