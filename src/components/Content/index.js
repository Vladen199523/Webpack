import React from 'react';
import style from './style.module.scss';
import Form from './component/Form';
import Todo from '../Todo'

class Content extends React.Component {
    render() {
        return (
            <div className = {style.content}> 
           <Todo/>
            </div>
           
        )
    }
}

export default Content;