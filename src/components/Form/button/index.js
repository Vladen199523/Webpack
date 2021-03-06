import React from 'react';
import styles from './style.module.scss';

class Button extends React.PureComponent {
    constructor (props) {
        super (props)
    }


    render () {
        return (
            <button className={styles.button} onClick = {this.props.onClick}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;