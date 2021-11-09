import React from 'react';
import styles from './style.module.scss';


class MenuItem extends React.Component {
    render () {
        return (
            <div className = {styles.menu}>
            <a href = "" className = {styles.item}>{this.props.title}</a>
            </div>
        )
    }
}

export default MenuItem;