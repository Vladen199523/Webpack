import React from 'react';
import styles from './style.module.scss';

class Footer extends React.Component {
    render() {
        return (
            <div>
            <div className = {styles.Footer}>
            <a className = {styles.items}>Offer</a>
            <a className = {styles.items}>Offer</a>
            <a className = {styles.items}>Offer</a>
            <a className = {styles.items}>Offer</a>
            <a className = {styles.items}>Offer</a>
            </div>
            </div>
        )
    }
}

export default Footer;