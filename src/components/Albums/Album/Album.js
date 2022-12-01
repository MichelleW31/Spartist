import React from "react";
import styles from "./Album.module.scss";

const Album = (props) => {
  const { name, images } = props.album;
  return (
    <div className={styles.Album}>
      <div
        className={styles.Image}
        style={{
          backgroundImage: "url(" + images[0].url + ")",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <h4 className={styles.Name}>{name}</h4>
    </div>
  );
};

export default Album;
