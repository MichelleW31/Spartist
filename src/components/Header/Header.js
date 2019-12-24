import React from 'react';
import styles from './Header.module.scss'

const header = () => {
    
    return (
        <div className={styles.Header}>
            <h1 className={styles.HeaderCopy} >Spartist</h1>
        </div>
    )
}

export default header