import React from 'react';
import Icon from './logo.svg';
import styles from './style.module.scss';



class Logo extends React.Component {
    render () {
        return (
            <div className = {styles.logo}>
                <img src ={Icon}/>
            </div>
        )
    }
}

export default Logo;
