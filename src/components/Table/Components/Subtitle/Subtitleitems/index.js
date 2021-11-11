import React from 'react';
import styles from './style.module.scss';


class SubtitleItem extends React.Component {
    render () {
        return (
            <div className = {styles.menu}>
            <a className = {styles.item}>{this.props.title}</a>
            <a className = {styles.item2}>{this.props.subtitle}</a>
            </div>
        )
    }
}

export default SubtitleItem;