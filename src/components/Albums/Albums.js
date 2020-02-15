import React, { Component } from "react";
import styles from "./Albums.module.scss";
import axios from "axios";
import Album from "./Album/Album";

class Albums extends Component {
  state = {
    albums: []
  };
  componentDidMount() {
    let header = {
      Authorization: "Bearer " + this.props.access_token
    };

    axios
      .get("/artists/" + this.props.artist.id + "/albums", { headers: header })
      .then(response => {
        console.log("albums", response);
        this.setState({
          albums: response.data.items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    let array = [];

    this.state.albums.map(album => {
      if (array.length === 0) {
        array.push(album);
      } else {
        if (!array.some(el => el.name === album.name)) {
          array.push(album);
        }
      }
    });

    let albums = array.map(album => {
      return <Album key={album.id} album={album} />;
    });

    return (
      <div className={styles.Albums_Wrapper}>
        <h2>Albums</h2>
        <div className={styles.Albums}>
          {this.state.albums.length != 0 ? albums : null}
        </div>
      </div>
    );
  }
}

export default Albums;
