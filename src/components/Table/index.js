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
            hasError: false,
            hasError2: false,
        }


    
    }


    onChangeInputHandler1 = (e) => {
        e.preventDefault()
        this.setState ({
            name:e.target.value
        })
    }

    onChangeInputHandler2 = (e) => {
        e.preventDefault()
        this.setState ({
            code:e.target.value
        })
    }


    onClickHandler = () => {
        if (this.state.name == '') {
            this.setState ({
            hasError: true,
            hasError2:true
            })
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
                {this.state.hasError && <div className = {styles.error}>Обязательное поле</div>}
                <Input onChange = {this.onChangeInputHandler2}/>
                {this.state.hasError2 && <div className = {styles.error2}>Пожалуйста, заполните все обязательные поля</div>}
                <Button onClick = {this.onClickHandler}>Записаться</Button>
            </div>
        )
    }
}

export default Table;