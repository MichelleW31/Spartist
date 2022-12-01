import React, { useState } from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  const [error, setError] = useState(false);

  const errorCheck = () => {
    let artist = document.getElementById("artist");

    if (artist.value === "") {
      setError(true);
    } else {
      setError(false);

      props.findID(artist);
    }
  };

  return (
    <div className={styles.Search}>
      <div className={styles.Form}>
        <input type="text" id="artist" placeholder="Search for Artist" />
        <input type="button" value="Find Artist" onClick={errorCheck} />
      </div>
      {error ? <p className={styles.Error}>Please enter an artist.</p> : null}
    </div>
  );
};

export default Search;
