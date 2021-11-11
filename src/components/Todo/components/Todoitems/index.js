import React from 'react';
import Style from './style.module.scss';
import Button from 'components/Form/button';

class TodoItem extends React.Component {
    onClickHandler = () => {
        this.props.onRemove (this.props.id)
    }


    render () {
        return (
            <div className = {Style.item}>
                {this.props.title}
                <Button onClick = {this.onClickHandler}>Delete</Button>
            </div>
        )
    }
}

export default TodoItem;
