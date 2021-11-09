import React from 'react';
import TodoItem from './components/Todoitems';
import Styles from './style.module.scss';

class Todo extends React.Component {
    constructor (props) {
        super (props);


        this.state = {
            todos: [
                "buy bread",
                "buy bread", 
                "buy bread",
                "buy bread",
                "buy bread",
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