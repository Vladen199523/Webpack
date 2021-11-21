import React from 'react';
import { ThemeConsumer } from 'styled-components';
import styles from './style.module.scss';
import Input from 'components/Form/input';
import Square from './square';
import Button from 'components/Form/button';
import Number from './Number/index';

class Form extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            number: 0,
            // number2: 0,
            // color: 'red'
    
        }

    }
    

    onSubmitHandler = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    // onChangeHandler2 = (event) => {
    //     this.setState({
    //         number2: +event.target.value 
    //     });
    // }


    // sumHandler = () => {
    //     return this.state.number1 + this.state.number2
    // }

    // color = (event) => {
    //     this.setState ({
    //         color: event.target.value
    //     });
    // }



    render () {
        return (
            <div className = {styles.form}>
                <Button onClick={this.onSubmitHandler}>Click</Button>
                <Number value = {this.state.number}/>
            </div>
        )
    }
}

export default Form;