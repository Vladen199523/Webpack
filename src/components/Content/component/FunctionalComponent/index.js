import React, { memo, useCallback, useEffect, useState, useMemo } from 'react';
import Input from 'components/Form/input';
import Button from 'components/Form/button';
import axios from 'axios';


const users = [
    {name:'dima', age: 15},
    {name:'vlad', age: 33},
    {name:'vasia', age: 34},
    {name:'pasha', age: 37},
    {name:'vadia', age: 65},
    {name:'volodya', age: 12},
]

const FunctionalComponent = () => {
    // console.log ('I am doing function again')
    const [count, setCount] = useState (0);
    const [value, setValue] = useState ('default');
        
    
    const adult = useMemo (() => {
        return users.filter (user => user.age > 10 && user.age < 20)
    }, [])


    
    const onChangeInput =  (value) => {
        setValue (value);
    }

    const onClickHandler  = useCallback (() => {
        console.log ('work', count);
    }, []);

    return (
    <div>
        <div>
        <Input onChange = {onChangeInput}/>
        {value}
        </div>
            <Button onClick = {onClickHandler}>click</Button>
            {adult.map (user => (
                <div>{user.name}</div>
            ))}
        </div>

    )
}


export default memo (FunctionalComponent);