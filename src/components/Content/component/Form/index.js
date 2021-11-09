import React from 'react';
import { ThemeConsumer } from 'styled-components';
import styles from './style.module.scss';
import Input from 'components/Form/input';
import Square from './square';

class Form extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            number1: 0,
            number2: 0,
            color: 'red'
    
        }

    }
    

    onChangeHandler1 = (event) => {
        this.setState({
            number1: +event.target.value
        });
    }

    onChangeHandler2 = (event) => {
        this.setState({
            number2: +event.target.value 
        });
    }


    sumHandler = () => {
        return this.state.number1 + this.state.number2
    }

    color = (event) => {
        this.setState ({
            color: event.target.value
        });
    }



    render () {
        return (
            <form className = {styles.form}>
                <Input onChange={this.onChangeHandler1}/>
                <Input onChange={this.onChangeHandler2}/>
                <Input onChange={this.color}/>
                <div className = {styles.number}>
                    {this.sumHandler()} </div>
        
                {/* <div className = {styles.square} style = {background:this.state.color}></div> */}
            </form>
        )
    }
}

export default Form;