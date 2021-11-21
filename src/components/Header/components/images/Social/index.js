import React from 'react';
import styles from './style.module.scss';
import Facebook from './Facebook.png';
import Insta from './Insta.png';
import VK from './VK.png';
import Youtube from './Youtube.png';



class Socials extends React.Component {
    render () {
        return (
            <div className = {styles.social}>
                <img className = {styles.item} src = {Facebook}/>
                <img className = {styles.item} src = {Insta}/>
                <img className = {styles.item} src = {VK}/>
                <img className = {styles.item} src = {Youtube}/>
            </div>        
        )
    }
}

export default Socials;

