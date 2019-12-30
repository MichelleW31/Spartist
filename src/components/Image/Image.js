import React, { Component } from 'react';
import styles from './Image.module.scss'

class Image extends Component {
    render () {
        return (
            <div className={styles.Image}>
                <p>{this.props.artist.name}</p>

            </div>
        )
    }
}

export default Image