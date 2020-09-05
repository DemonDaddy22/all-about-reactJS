/* eslint-disable no-restricted-globals */
import React from 'react';
import classes from './styles.module.css';
import Input from '../../ui-components/Input';
import Button from '../../ui-components/Button';
import SnackBar from '../../ui-components/SnackBar';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Iconbutton from '../../ui-components/Button/Iconbutton';
import { isEmptyList, isEmptyString } from '../../utils';
import Todo from './components/Todo';

export default class Todos extends React.Component {

    state = {
        todos: [],
        value: '',
        checkedBox: false,
        checkedRadio: false,
        snackOpen: false,
        snackMessage: '',
        snackSeverity: ''
    }

    handleValueChange = e => this.setState({ value: e.target.value });

    handleAddTodo = () => {
        if (isEmptyString(this.state.value)) {
            this.setState({ snackOpen: true, snackMessage: 'You need to add something first!', snackSeverity: 'warning' });
        } else {
            const todo = { value: this.state.value, isEditable: false };
            this.setState({ todos: [...this.state.todos, todo], value: '', snackOpen: true, snackMessage: 'ToDo added successfully!', snackSeverity: 'success' });
        }
    };

    handleSnackClose = () => this.setState({ snackOpen: false });

    toggleCheckBox = () => this.setState({ checkedBox: !this.state.checkedBox });

    checkRadio = () => this.setState({ checkedRadio: true });

    render = () => {
        const { value, todos, snackMessage, snackOpen, snackSeverity } = this.state;
        const { containerStyle } = this.props;

        return <>
            <div className={classes.todosHeader}>ToDos Manager</div>
            <div className={classes.addTodosContainer} style={containerStyle}>
                <div className={classes.addTodoWrapper}>
                    <Input id='add-todo' label='Add ToDo' onChange={this.handleValueChange} value={value} variant='outlined' rootInputStyles={{ backgroundColor: 'var(--text-light)', borderRadius: 'inherit' }} />
                    <Button className={classes.desktopBtn} onClick={this.handleAddTodo} labelStyles={{ display: 'inline-flex', padding: 0 }} endIcon={<NoteAddIcon />}>Add ToDo</Button>
                    <Iconbutton className={classes.mobileBtn} onClick={this.handleAddTodo} icon={<NoteAddIcon fontSize='large' />}></Iconbutton>
                </div>
            </div>
            {!isEmptyList(todos) && <div className={classes.todosContainer}>
                {todos.map((todo, index) => {
                    return <Todo key={`todo-${index}`} index={index} todo={todo} />
                })}
            </div>}
            <SnackBar message={snackMessage} severity={snackSeverity} handleClose={this.handleSnackClose} open={snackOpen} />
        </>;
    }
}