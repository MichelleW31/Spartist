import React, { Component } from 'react';
import Header from '../../components/Header/Header.js';
import Search from '../../components/Search/Search.js';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    access_token: null
  }

  componentDidMount () {
    let param = "grant_type=client_credentials&client_id=2f473a1d096845c691c2d5217a94a347&client_secret=c524c7aa622e4e65b3cf5f690477bd3a";

    let header = {
      'Content-Type':'application/x-www-form-urlencoded'
    }


    axios.post('https://accounts.spotify.com/api/token', param , {headers: header})
      .then(response => {
        this.setState({access_token: response.data.access_token})
      })
      .catch(error => {
        console.log(error)
      })

  }

  render() {
    return (
      <div className="App">
        <Header />
        <p style={{color: 'white'}}>{this.state.access_token}</p>
        <Search access_token={this.state.access_token}/>
      </div>
    );
  }
}

export default App;