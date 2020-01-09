import React, { Component } from 'react';
import styles from './Albums.module.scss'
import axios from 'axios';

class Albums extends Component {
    componentDidMount () {
        let header = {
            'Authorization': 'Bearer ' + this.props.access_token
        } 

        axios.get('/artists/' + this.props.artist.id + '/albums', {headers: header})
            .then(response => {
                console.log('albums', response)
            })
            .catch(error => {
                console.log(error)
            })
    }

    render () {
        return (
            <div className={styles.Albums}>
                <h2>Albums component</h2>
            </div>
        )
    }
}

export default Albums;