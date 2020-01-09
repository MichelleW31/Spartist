import React, { Component } from 'react';
import styles from './Albums.module.scss'

class Albums extends Component {
    componentDidMount () {

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