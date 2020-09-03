import React from 'react';
import './index.css';
import Input from '../../ui-components/Input';
import Button from '../../ui-components/Button';
import CheckBox from '../../ui-components/CheckBox';
import Radio from '../../ui-components/Radio';
import SnackBar from '../../ui-components/SnackBar';

export default class Todos extends React.Component {

    state = {
        todos: [],
        value: '',
        checkedBox: false,
        checkedRadio: false,
        snackOpen: false,
    }

    handleValueChange = e => {
        this.setState({ value: e.target.value });
    }

    handleBtnClick = () => this.setState({ snackOpen: true }, () => setTimeout(this.handleSnackClose, 6000));

    handleSnackClose = () => this.setState({ snackOpen: false });

    toggleCheckBox = () => this.setState({ checkedBox: !this.state.checkedBox });

    checkRadio = () => this.setState({ checkedRadio: true });

    render = () => {
        const { todos } = this.state;
        const { containerStyle } = this.props;

        return <div className='todosContainer' style={containerStyle}>
            <Input id='input-test' label='test' onChange={this.handleValueChange} value={this.state.value}
                placeholder='test' variant='outlined' />
            <Button className='btn' onClick={this.handleBtnClick}>Test</Button>
            <CheckBox labelProps={{ style: { display: 'block', marginTop: 20 } }} label='Test' checked={this.state.checkedBox} onChange={this.toggleCheckBox}></CheckBox>
            <Radio labelProps={{ style: { display: 'block', marginTop: 20 } }} label='Test' checked={this.state.checkedRadio} onChange={this.checkRadio}></Radio>
            <SnackBar handleClose={this.handleSnackClose} open={this.state.snackOpen} />
        </div>;
    }
}