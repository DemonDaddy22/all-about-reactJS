import React from 'react';
import './index.css';
import Input from '../../ui-components/Input';
import Button from '../../ui-components/Button';
import CheckBox from '../../ui-components/CheckBox';

export default class Todos extends React.Component {

    state = {
        todos: [],
        value: '',
        checked: false
    }

    handleValueChange = e => {
        this.setState({ value: e.target.value });
    }

    handleBtnClick = () => alert('Button clicked!');

    toggleCheckBox = () => this.setState({ checked: !this.state.checked });

    render = () => {
        const { todos } = this.state;
        const { containerStyle } = this.props;

        return <div className='todosContainer' style={containerStyle}>
            <Input id='input-test' label='test' onChange={this.handleValueChange} value={this.state.value}
                placeholder='test' variant='outlined' />
            <Button className='btn' onClick={this.handleBtnClick}>Test</Button>
            <CheckBox labelProps={{ style: { display: 'block', marginTop: 20 } }} label='Test' checked={this.state.checked} onChange={this.toggleCheckBox}></CheckBox>
        </div>;
    }
}