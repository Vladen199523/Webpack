import React from 'react';
import style from './style.module.scss';
import Form from './component/Form';
import Todo from '../Todo';
import ShouldComponentUpdateExample from '../ShouldComponentUpdateExample';
import Table from '../Table/index';

class Content extends React.Component {
    render() {
        return (
            <div className = {style.content}> 
            <Table/>
            </div>
           
        )
    }
}

export default Content;