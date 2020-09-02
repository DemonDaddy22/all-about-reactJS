import React from 'react';
import './index.css';
import Input from '../../ui-components/Input';

export default class Todos extends React.Component {

    state = {
        todos: [],
        value: ''
    }

    handleValueChange = e => {
        this.setState({ value: e.target.value });
    }

    render = () => {
        const { todos } = this.state;
        const { containerStyle } = this.props;

        return <div className='todosContainer' style={containerStyle}>
            <Input id='input-test' label='test' onChange={this.handleValueChange} value={this.state.value} placeholder='test' style={{ width: 'inherit', margin: 6 }} />
        </div>;
    }
}