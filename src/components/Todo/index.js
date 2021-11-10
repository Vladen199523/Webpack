import React from 'react';
import TodoItem from './components/Todoitems';
import Styles from './style.module.scss';

class Todo extends React.Component {
    constructor (props) {
        super (props);


        this.state = {
            todos: [
                "Сходить в магазин",
                "Сделать домашнее задание", 
                "Помыть посуду",
                "Пропылесосить",
                "Заправить машину",
            ]
        }
    }
    render () {
        return (
            <div className = {Styles.content}>
                {this.state.todos.map (item => (
                    <TodoItem title ={item}/>
                ))}
            </div>
        )
    }
}

export default Todo;