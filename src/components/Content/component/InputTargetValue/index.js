import React, {useState,useEffect} from 'react';
import Input from '../../../Form/input/index';
import styles from '../InputTargetValue/styles.module.scss';


const InputTargetValue = () => {
    const [value, setValue] = useState ('');
        
    useEffect (() => {
    console.log ('You entered the following value:')
})


    
    const onChangeInput =  (value) => {
        setValue (value);
    }


    return (
    <div>
        <div className = {styles.inputValue}>
        <Input onChange = {onChangeInput}/>
        {value}
        <Input onChange = {onChangeInput}/>
        {value}
        </div>
    </div>

    )
}


export default InputTargetValue;