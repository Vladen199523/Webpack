import React from 'react';
import TodoItem from './components/Todoitems';
import Styles from './style.module.scss';
import Button from '../Form/button/index';
import Input from '../Form/input/index';


class Todo extends React.Component {
    constructor (props) {
        super (props);


        this.state = {
            todos: [
            {ID: 1,
            title: "Сходить в магазин"},
            {ID: 2,
            title: "Сделать домашнее задание"},
            {ID: 3,
            title: "Помыть посуду"},
            {ID: 4,
            title: "Пропылесосить"},
            {ID: 5,
            title: "Заправить машину"},
            ],
            text: ''
        }
    }

onChangeInputHandler = (e) => {
    this.setState ({
        text:e.target.value
    })
}

onClickHandler = () => {
    const newItem = {
        id:Math.round (Math.random()* 100),
        title:this.state.text
    }

    this.setState({
        todos: this.state.todos.concat (newItem)
    })
}


 onRemoveHandler = (item) => {
     console.log ('onRemoveHandler', item);
     const newItems = this.state.todos.filter (todo => todo.ID !== item);
     console.log (newItems);
     this.setState ({
         todos:newItems
     })
 }


    render () {
        return (
            <div className = {Styles.content}>
                <Input onChange = {this.onChangeInputHandler}/>
                <Button onClick = {this.onClickHandler}>click</Button>
                {this.state.todos.map (item => (
                    <TodoItem 
                    id={item.ID}
                    title={item.title}
                    onRemove={this.onRemoveHandler}
                    /> 
                ))}
            </div>
        )
    }
}

export default Todo;

