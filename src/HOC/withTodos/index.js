import React from 'react';
import axios from 'axios';

function withTodos(Component) {
    return class extends React.Component {
        constructor (props) {
            super (props)


            this.state = {
                todos: []
            }
        }

createTodo = (title) => {
    const formData = new FormData ()
    formData.append ('title' , title)
    axios.post ('https://todo-fe57.herokuapp.com/todo', formData).then(() => {
        this.loadTodos();
    })
}

deleteTodo = (id) => {
    axios.delete ('https://todo-fe57.herokuapp.com/todo/' + id).then(() => {
        this.loadTodos();
    });
}

    componentDidMount () {
        this.loadTodos ();
    }

        loadTodos = () => {
            axios.get ('https://todo-fe57.herokuapp.com/todo').then ((response) => {
                const todos = response.data.map (item => {
                    return {
                        ID: item._id,
                        title:item.title
                    }
                })
                console.log (response.data);
                this.setState ({
                    todos:todos
                })
            })
        }
        render(){
            return (
                <Component 
                items ={this.state.todos} 
                create ={this.createTodo} 
                delete ={this.deleteTodo}/>
            )
    }
}
}


export default withTodos;