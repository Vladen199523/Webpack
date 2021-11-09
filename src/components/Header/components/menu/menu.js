import React from 'react';
import styles from './style.module.scss';
import MenuItem from './menuitems/index';





class Menu extends React.Component {
    render() {
        return (
        <div className = {styles.menuBlock}>
            <MenuItem title = "Курсы"/>
            <MenuItem title = "Мастер-классы"/>
            <MenuItem title = "Преподаватели"/>
            <MenuItem title = "Блог"/>
            <MenuItem title = "Контакты"/>
        </div>
        )
    }
}

export default Menu;