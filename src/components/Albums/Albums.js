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
    let albumsArray = [...this.state.albums];

    let array = [];

    for (let i = 0; i < albumsArray.length; i++) {
      if (array.length === 0) {
        array.push(albumsArray[i]);
        console.log(array);
      } else {
        let found = array.some(el => el.name === albumsArray[i].name);
        if (!found) {
          array.push(albumsArray[i]);
          console.log(array);
        }
      }
    }

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
