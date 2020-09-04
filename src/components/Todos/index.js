/* eslint-disable no-restricted-globals */
import React from 'react';
import './index.css';
import Input from '../../ui-components/Input';
import Button from '../../ui-components/Button';
import CheckBox from '../../ui-components/CheckBox';
import Radio from '../../ui-components/Radio';
import SnackBar from '../../ui-components/SnackBar';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Iconbutton from '../../ui-components/Button/Iconbutton';

export default class Todos extends React.Component {

    state = {
        todos: [],
        value: '',
        checkedBox: false,
        checkedRadio: false,
        snackOpen: false,
        snackMessage: ''
    }

    handleValueChange = e => this.setState({ value: e.target.value });

    handleAddTodo = () => {
        const todo = { value: this.state.value, isEditable: false };
        this.setState({ todos: [...this.state.todos, todo], value: '', snackOpen: true, snackMessage: 'ToDo added successfully!' });
    };

    handleSnackClose = () => this.setState({ snackOpen: false });

    toggleCheckBox = () => this.setState({ checkedBox: !this.state.checkedBox });

    checkRadio = () => this.setState({ checkedRadio: true });

    render = () => {
        const { todos, snackMessage } = this.state;
        const { containerStyle } = this.props;

        return <div className='todosContainer' style={containerStyle}>
            <div className='addTodoWrapper'>
                <Input id='add-todo' label='Add ToDo' onChange={this.handleValueChange} value={this.state.value} variant='outlined' />
                <Button className='desktopBtn' onClick={this.handleAddTodo} labelStyles={{ display: 'inline-flex', padding: 0 }} endIcon={<NoteAddIcon />}>Add ToDo</Button>
                <Iconbutton className='mobileBtn' onClick={this.handleAddTodo} size='2rem' icon={<NoteAddIcon fontSize='large' />}></Iconbutton>
            </div>
            <CheckBox labelProps={{ style: { display: 'block', marginTop: 20 } }} label='Test' checked={this.state.checkedBox} onChange={this.toggleCheckBox}></CheckBox>
            <Radio labelProps={{ style: { display: 'block', marginTop: 20 } }} label='Test' checked={this.state.checkedRadio} onChange={this.checkRadio}></Radio>
            <SnackBar message={snackMessage} severity='success' handleClose={this.handleSnackClose} open={this.state.snackOpen} />
        </div>;
    }
}