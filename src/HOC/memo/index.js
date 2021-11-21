import React from 'react';

function memo (Component) {
    return class extends React.Component {
        
        shouldComponentUpdate (nextProps, thisProps) {
            console.log (nextProps, thisProps)
            if (_.isEqual (nextProps, thisProps)) {
                return false
            }
            else {
                return true
            }
    
    }
        render () {
            return (
                <Component {...this.props}/>
            )
        }
    }
}

export default memo;