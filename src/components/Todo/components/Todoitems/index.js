import React from 'react';
import Style from './style.module.scss';
import Button from 'components/Form/button';

class TodoItem extends React.Component {
    render () {
        return (
            <div className = {Style.item}>
                {this.props.title}
                <Button>Delete</Button>
            </div>
        )
    }
}

export default TodoItem;
