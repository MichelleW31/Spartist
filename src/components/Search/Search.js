import React, { Component } from 'react';
import styles from './Search.module.scss';

class Search extends Component {
    state = {
        error: false
    }

    render () {

        return (
            <div className={styles.Search}>
                <div className={styles.Form}>
                    <input type="text" id="artist" placeholder="Search for Artist" />
                    <input type="button" value="Find Artist" onClick={this.props.findID}/>
                </div>
            </div>
        )
    }
}

export default Search;