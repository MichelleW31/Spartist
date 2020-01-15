import React, { Component } from 'react'
import styles from './Album.module.scss';

class Album extends Component {
    state = {

    }

    render () {

        return (
            <div className={styles.Album}>
                <h1>this is an album</h1>
            </div>
        )
    }
}

export default Album