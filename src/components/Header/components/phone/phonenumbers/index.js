import React from 'react';
import styles from './style.module.scss';

class PhoneNumbers extends React.Component {
    render () {
        return (
            <div className = {styles.Phone}>
                <a>{this.props.phone}</a>
            </div>
        )
    }
}

export default PhoneNumbers;