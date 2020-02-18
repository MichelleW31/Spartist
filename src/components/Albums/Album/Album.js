import React, { Component } from "react";
import styles from "./Album.module.scss";


class Album extends Component {
  state = {};

  render() {
    const { name, release_date, images, url } = this.props.album;
    return (
      <div className={styles.Album}>
        <div
          className={styles.Image}
          style={{
            backgroundImage: "url(" + images[0].url + ")",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
        <h4 className={styles.Name}>{name}</h4>
        {/* <div className={styles.Copy}>
          <a href={url} className={styles.Link}>
            Open in Spotify
          </a>
        </div> */}
      </div>
    );
  }
}

export default Album;
