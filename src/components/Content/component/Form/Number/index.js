import React from 'react';
import memo from 'hoc/memo';

class Number extends React.Component {
    render () {
        return (
        <div>{this.props.value}</div>
        )
    }
}

export default memo(Number);