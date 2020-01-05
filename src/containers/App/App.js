import React, { Component } from 'react';
import Header from '../../components/Header/Header.js';
import Search from '../../components/Search/Search.js';
import Image from '../../components/Image/Image.js';
import './App.scss';
import axios from 'axios'

class App extends Component {
  state = {
    access_token: null,
    artist: [],
    id: null,
    step: 0
  }

  //GETS ACCESS TOKEN FROM CREDENTIALS
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

  //FINDS ID OF ARTIST SO THAT WE CAN GET TRACKS
  findID = (artist) => {
    let header = {
        'Authorization': 'Bearer ' + this.state.access_token
    }

    axios.get('/search?q='+ artist.value + '&type=artist', {headers: header})
        .then(response => {
            console.log(response.data.artists.items[0])
            this.setState({
              artist: response.data.artists.items[0],
              id: response.data.artists.items[0].id,
              step: 1
            })
        })
        .catch(error => {
            console.log(error)
            this.setState({error: true})
        })
  }
  //end of findID

  stateManager = () => {
    const {step} = this.state
    switch (step) {
      case 0:
        return <p className="default-copy">Who do you want to look up today?</p>
      case 1:
        return (
          <Image artist={this.state.artist}/>
          //remove state manager. handle it in the render
          )
        
    }
  }

  render() {

    return (
      <div className="App">
        <Header />
        <Search access_token={this.state.access_token} 
                findID={this.findID}/>
        {this.state.artist.length != 0 ? <h2 className="name">{this.state.artist.name } - <span className="genre">{this.state.artist.genres[0]}</span></h2> : null}
        {this.stateManager()}
      </div>
    );
  }
}

export default App;