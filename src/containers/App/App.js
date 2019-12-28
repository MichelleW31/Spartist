import React, { Component } from 'react';
import Header from '../../components/Header/Header.js';
import Search from '../../components/Search/Search.js';
import './App.css';
import axios from 'axios'

class App extends Component {
  componentDidMount () {
    let params = "grant_type=client_credentials&client_id=2f473a1d096845c691c2d5217a94a347&client_secret=c524c7aa622e4e65b3cf5f690477bd3a";

    let header = {
      'Accept':'application/json',
      'Content-Type':'application/x-www-form-urlencoded'
    }


    axios.post('https://accounts.spotify.com/api/token', params , {headers: header})
      .then(response => {
        console.log('from post call in app', response)
      })
      .catch(error => {
        console.log(error)
      })

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search />
      </div>
    );
  }
}

export default App;