/* eslint-disable no-restricted-globals */
import React from 'react';
import classes from './styles.module.css';
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
        // check if todo is empty
        const todo = { value: this.state.value, isEditable: false };
        this.setState({ todos: [...this.state.todos, todo], value: '', snackOpen: true, snackMessage: 'ToDo added successfully!' });
    };

    handleSnackClose = () => this.setState({ snackOpen: false });

    toggleCheckBox = () => this.setState({ checkedBox: !this.state.checkedBox });

    checkRadio = () => this.setState({ checkedRadio: true });

    render = () => {
        const { todos, snackMessage } = this.state;
        const { containerStyle } = this.props;

        return <>
            <div className={classes.todosHeader}>ToDos Manager</div>
            <div className={classes.todosContainer} style={containerStyle}>
                <div className={classes.addTodoWrapper}>
                    <Input id='add-todo' label='Add ToDo' onChange={this.handleValueChange} value={this.state.value} variant='outlined' />
                    <Button className={classes.desktopBtn} onClick={this.handleAddTodo} labelStyles={{ display: 'inline-flex', padding: 0 }} endIcon={<NoteAddIcon />}>Add ToDo</Button>
                    <Iconbutton className={classes.mobileBtn} onClick={this.handleAddTodo} size='2rem' icon={<NoteAddIcon fontSize='large' />}></Iconbutton>
                </div>
            </div>
            <SnackBar message={snackMessage} severity='success' handleClose={this.handleSnackClose} open={this.state.snackOpen} />
        </>;
    }
}

{/* <CheckBox labelProps={{ style: { display: 'block', marginTop: 20 } }} label='Test' checked={this.state.checkedBox} onChange={this.toggleCheckBox}></CheckBox>
                <Radio labelProps={{ style: { display: 'block', marginTop: 20 } }} label='Test' checked={this.state.checkedRadio} onChange={this.checkRadio}></Radio> */}