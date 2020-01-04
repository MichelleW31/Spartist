import React, { Component } from 'react';
import styles from './Search.module.scss';

class Search extends Component {
    state = {
        error: false
    }

    errorCheck = () => {
        let artist =  document.getElementById('artist');
        if ( artist.value === '') {
            this.setState({
                error: true
            })
        } else {
            this.setState({
                error: false
            })

            this.props.findID(artist)
        }
    }

    render () {

        return (
            <div className={styles.Search}>
                <div className={styles.Form}>
                    <input type="text" id="artist" placeholder="Search for Artist" />
                    <input type="button" value="Find Artist" onClick={this.errorCheck}/>
                </div>
                {this.state.error ? <p className={styles.Error}>Please enter an artist.</p> : null}
            </div>
        )
    }
}

export default Search;