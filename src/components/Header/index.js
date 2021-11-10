import React from 'react';
import Menu from './components/menu/menu';
import style from  './style.module.scss';
import Phone from './components/phone/index';
import Logo from './components/images/Logo';
import Socials from './components/images/Social';




class Header extends React.Component {
    render() {
        return (
            <div className = {style.header}>
                <Logo/>
                <Menu/>
                <Phone/>
                <Socials/>
            </div>
        )
    }
}

export default Header;