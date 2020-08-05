import React, { Component } from "react";
import styles from "./Albums.module.scss";
import axios from "axios";
import Album from "./Album/Album";
import LeftArrow from "../Arrows/LeftArrow/LeftArrow";
import RightArrow from "../Arrows/RightArrow/RightArrow";

class Albums extends Component {
  state = {
    albums: []
  };
  componentDidUpdate() {
    $(".Albums").slick({
      arrows: true,
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 470,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }

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
        if (
          !array.some(el => el.name === album.name) &&
          album.name.length < 20
        ) {
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
        <div className="Albums">
          {this.state.albums.length != 0 ? albums : null}
        </div>
      </div>
    );
  }
}

export default Albums;
