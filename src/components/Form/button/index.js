import React from 'react';
import styles from '../button'

class Button extends React.Component {
    constructor (props) {
        super (props)
    }



    render () {
        return (
            <button className={styles.button}>click me
            </button>
        )
    }
}

export default Button;