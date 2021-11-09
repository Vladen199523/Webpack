import React from 'react';
import Menu from './components/menu/menu';
import style from  './style.module.scss';
import Phone from './components/phone/index';
import Logo from './components/images/logo.svg';




class Header extends React.Component {
    render() {
        return (
            <div className = {style.header}>
                <Menu/>
                <Phone/>
            </div>
        )
    }
}

export default Header;