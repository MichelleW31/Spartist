import React, { useEffect, useState } from "react";
import styles from "./Albums.module.scss";
import axios from "axios";
import Album from "./Album/Album";
import Slider from "react-slick";

const Albums = (props) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    let header = {
      Authorization: "Bearer " + props.access_token,
    };

    axios
      .get("/artists/" + props.artist.id + "/albums", { headers: header })
      .then((response) => {
        setAlbums(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.artist.id]);

  const settings = {
    arrows: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  let array = [];

  albums.map((album) => {
    if (array.length === 0) {
      array.push(album);
    } else {
      if (
        !array.some((el) => el.name === album.name) &&
        album.name.length < 20
      ) {
        array.push(album);
      }
    }
  });

  let albumList = array.map((album) => {
    return <Album key={album.id} album={album} />;
  });

  return (
    <div className={styles.Albums_Wrapper}>
      <h2>Albums</h2>
      <div className="Albums">
        <Slider {...settings}>{albums.length != 0 ? albumList : null}</Slider>
      </div>
    </div>
  );
};

export default Albums;
