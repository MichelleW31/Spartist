import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header.js";
import Search from "../../components/Search/Search.js";
import Image from "../../components/Image/Image.js";
import Albums from "../../components/Albums/Albums.js";
import "./App.scss";
import axios from "axios";
import { getApiToken, accessToken } from "../../config.js";

const App = () => {
  const [artist, setArtist] = useState([]);
  const [step, setStep] = useState(0);

  //GETS ACCESS TOKEN FROM CREDENTIALS
  useEffect(() => {
    getApiToken();
  }, []);

  //FINDS ID OF ARTIST SO THAT WE CAN GET TRACKS
  const findID = (artist) => {
    let header = {
      Authorization: "Bearer " + accessToken,
    };

    axios
      .get("/search?q=" + artist.value + "&type=artist", { headers: header })
      .then((response) => {
        setArtist(response.data.artists.items[0]);
        setStep(1);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //end of findID

  const stateManager = () => {
    switch (step) {
      case 0:
        return (
          <p className="default-copy">Who do you want to look up today?</p>
        );
      case 1:
        return (
          <div className="image-and-albums">
            <Image artist={artist} />
            <Albums artist={artist} access_token={accessToken} />
          </div>
        );
      default:
        return (
          <p className="default-copy">Who do you want to look up today?</p>
        );
    }
  };

  return (
    <div className="App">
      <Header />
      <Search access_token={accessToken} findID={findID} />
      {artist.length !== 0 ? (
        <h2 className="name">
          {artist.name} - <span className="genre">{artist.genres[0]}</span>
        </h2>
      ) : null}
      {stateManager()}
    </div>
  );
};

export default App;
