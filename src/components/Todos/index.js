import React from 'react';
import './index.css';

export default class Todos extends React.Component {
    
    state = {
        todos: []
    }

    render = () => {
        const { todos } = this.state;
        const { containerStyle } = this.props;

        return <div className='todosContainer' style={containerStyle}>
            
        </div>;
    }
}