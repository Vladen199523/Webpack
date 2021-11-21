import React from 'react';
import TodoItem from './components/Todoitems';
import Styles from './style.module.scss';
import Button from '../Form/button/index';
import Input from '../Form/input/index';
import axios from 'axios';
import { ThemeConsumer } from 'styled-components';
import withTodos from 'hoc/withTodos';


class Todo extends React.Component {
    constructor (props) {
        super (props);


        this.state = {
            // todos: [
            // {ID: 1,
            // title: "Сходить в магазин"},
            // {ID: 2,
            // title: "Сделать домашнее задание"},
            // {ID: 3,
            // title: "Помыть посуду"},
            // {ID: 4,
            // title: "Пропылесосить"},
            // {ID: 5,
            // title: "Заправить машину"},
            // ],
            text: ''
        }
    }

    // componentDidMount () {
    //     this.loadTodos();
    // }

    // loadTodos = () => {
    //     axios.get ('https://todo-fe57.herokuapp.com/todo').then ((response) => {
    //         const todos = response.data.map (item => {
    //             return {
    //                 ID: item._id,
    //                 title:item.title
    //             }
    //         })
    //         console.log (response.data);
    //         this.setState ({
    //             todos:todos
    //         })
    //     })
    // }


onAdd = () => {
    // const formData = new FormData ()
    // formData.append ('title' , this.state.text)
    // axios.post ('https://todo-fe57.herokuapp.com/todo', formData).then(() => {
    //     this.loadTodos ();
    // })
    this.props.create (this.state.text)
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


 onRemoveHandler = (id) => {
    // axios.delete ('https://todo-fe57.herokuapp.com/todo/' + id).then(() => {
    //     this.loadTodos ()
    // })
    this.props.delete (id)
 }


    render () {
        return (
            <div className = {Styles.content}>
                <Input onChange = {this.onChangeInputHandler}/>
                <Button onClick = {this.onAdd}>click</Button>
                {this.props.items.map (item => (
                    <TodoItem
                    key={item.ID} 
                    id={item.ID}
                    title={item.title}
                    onRemove={this.onRemoveHandler}
                    /> 
                ))}
            </div>
        )
    }
}

export default withTodos (Todo);

