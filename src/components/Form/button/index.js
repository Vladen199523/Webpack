import React from 'react';
import styles from './style.module.scss';

class Button extends React.Component {
    constructor (props) {
        super (props)
    }



    render () {
        return (
            <button className={styles.button}>Well done
            </button>
        )
    }
}

export default Button;