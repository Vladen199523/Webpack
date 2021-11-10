import React from 'react';
import styles from './style.module.scss';
import Facebook from './facebook.png';
import Instagram from './instagram.jpeg';
import VK from './vk.jpeg';
import Youtube from './youtube.png';



class Socials extends React.Component {
    render () {
        return (
            <div className = {styles.social}>
                <img className = {styles.item} src = {Facebook}/>
                <img className = {styles.item} src = {Instagram}/>
                <img className = {styles.item} src = {VK}/>
                <img className = {styles.item} src = {Youtube}/>
            </div>        
        )
    }
}

export default Socials;

