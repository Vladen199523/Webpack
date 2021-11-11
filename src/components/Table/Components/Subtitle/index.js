import React from 'react';
import styles from './style.module.scss';
import Subtitleitem from '../Subtitle/Subtitleitems/index';


class Subtitle extends React.Component {
    render () {
        return (
            <div className = {styles.menu}>
                <div className = {styles.block}>
                <Subtitleitem title = "Старт группы FE76"/>
                <Subtitleitem subtitle = "19ое января"/>
                </div>
                <div className = {styles.block}>
                <Subtitleitem title = "Дни и время занятий"/>
                <Subtitleitem subtitle = "Среда, 19:00--22:00"/>
                <Subtitleitem subtitle = "Пятница, 19:00--22:00"/>
                </div>
                <div className = {styles.block}>
                <Subtitleitem title = "Кол-во свободных мест"/>
                <Subtitleitem subtitle = "10 из 14"/>
                </div>
            </div>
        )
    }
}

export default Subtitle;