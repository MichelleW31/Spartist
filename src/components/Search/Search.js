import React, { Component } from 'react';
import styles from './Search.module.scss'
import axios from 'axios'

class Search extends Component {
    state = {
        error: false
    }

    render () {

        return (
            <div className={styles.Search}>
                <input type="text" id="artist" placeholder="Search for Artist" />
                <input type="button" value="Find Artist" onClick={this.props.findID}/>
            </div>
        )
    }
}

export default Search;