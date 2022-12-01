import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header.js";
import Search from "../../components/Search/Search.js";
import Image from "../../components/Image/Image.js";
import Albums from "../../components/Albums/Albums.js";
import "./App.scss";
import axios from "axios";

const App = () => {
  const [access_token, setAccessToken] = useState(null);
  const [artist, setArtist] = useState([]);
  const [step, setStep] = useState(0);

  //GETS ACCESS TOKEN FROM CREDENTIALS
  useEffect(() => {
    let param =
      "grant_type=client_credentials&client_id=2f473a1d096845c691c2d5217a94a347&client_secret=c524c7aa622e4e65b3cf5f690477bd3a";

    let header = {
      "Content-Type": "application/x-www-form-urlencoded",
    };

    axios
      .post("https://accounts.spotify.com/api/token", param, {
        headers: header,
      })
      .then((response) => {
        setAccessToken(response.data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //FINDS ID OF ARTIST SO THAT WE CAN GET TRACKS
  const findID = (artist) => {
    let header = {
      Authorization: "Bearer " + access_token,
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
            <Albums artist={artist} access_token={access_token} />
          </div>
        );
    }
  };

  return (
    <div className="App">
      <Header />
      <Search access_token={access_token} findID={findID} />
      {artist.length != 0 ? (
        <h2 className="name">
          {artist.name} - <span className="genre">{artist.genres[0]}</span>
        </h2>
      ) : null}
      {stateManager()}
    </div>
  );
};

export default App;
