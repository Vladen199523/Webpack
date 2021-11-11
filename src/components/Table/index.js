import React from 'react';
import styles from './style.module.scss';
import Button from '../Form/button/index';
import Input from '../Form/input/index';
import Subtitle from '../Table/Components/Subtitle/index';


class Table extends React.Component {
    constructor (props) {
        super (props);

        this.state = {
            name: '',
            code: '',
        }


    
    }


    onChangeInputHandler1 = (e) => {
        this.setState ({
            name:e.target.value
        })
    }

    onChangeInputHandler2 = (e) => {
        this.setState ({
            code:e.target.value
        })
    }


    onClickHandler = () => {
        if (this.state.name == '') {
            alert ('Пожалуйста, заполните все обязательные поля')
        }
        else {
            alert (this.state.name + ' ' + this.state.code)
        }
    }
    



    render () {
        return (
            <div className = {styles.table}>
                <Subtitle/>
                <Input onChange = {this.onChangeInputHandler1}/>
                <Input onChange = {this.onChangeInputHandler2}/>
                <Button onClick = {this.onClickHandler}>Записаться</Button>
            </div>
        )
    }
}

export default Table;