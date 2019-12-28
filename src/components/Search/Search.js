import React, { Component } from 'react';
import styles from './Search.module.scss'
import axios from 'axios'

class Search extends Component {
    state = {
        artist: {},
        error: false
    }

    findID = () => {
        let artist = document.getElementById("artist")

        // axios.get('/search?q='+ artist.value + '&type=artist')
        //     .then(response => {
        //         console.log('artist', response)
        //     })
        //     .catch(error => {
        //         console.log(error)
        //         this.setState({error: true})
        //     })
    }

    render () {

        return (
            <div className={styles.Search}>
                <input type="text" id="artist" placeholder="Search for Artist" />
                <input type="button" value="Find Artist" onClick={this.findID}/>
            </div>
        )
    }
}

export default Search;