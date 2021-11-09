import React from 'react';
import styles from './style.module.scss';
import PhoneNumbers from './phonenumbers/index';


class Phone extends React.Component {
    render () {
        return (
            <div className = {styles.phoneList}>
                <PhoneNumbers phone = "+375 29 105 59 59"/>
                <PhoneNumbers phone = "+375 29 305 59 59"/>
            </div>
        )
    }
}


export default Phone;