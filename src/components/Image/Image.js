import React, { Component } from 'react';
import styles from './Image.module.scss'

class Image extends Component {
    componentDidMount () {
        console.log('artist from ',this.props.artist.name, this.props.artist)
    }

    render () {
        return (
            <div className={styles.Image} style={{
                backgroundImage: 'url(' + this.props.artist.images[0].url + ')',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat'
            }}>
            </div>
        )
    }
}

export default Image