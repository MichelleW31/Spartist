import React, { Component } from 'react';
import styles from './Image.module.scss'

class Image extends Component {
    imgUrl = this.props.artist.images[0].url

    render () {
        return (
            <div className={styles.Image} style={{
                backgroundImage: 'url(' + this.imgUrl + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
        )
    }
}

export default Image