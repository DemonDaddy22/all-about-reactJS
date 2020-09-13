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
import Page from '../../ui-components/Page';

export default class Todos extends React.Component {

    state = {
        todos: JSON.parse(localStorage.getItem('todos')) || [],
        value: '',
        snackOpen: false,
        snackMessage: '',
        snackSeverity: ''
    }

    handleValueChange = e => this.setState({ value: e.target.value });

    handleAddTodo = () => {
        if (isEmptyString(this.state.value)) {
            this.setState({ snackOpen: true, snackMessage: 'You need to add something first!', snackSeverity: 'info' });
        } else {
            const todo = { value: this.state.value, checked: false, isEditable: false };
            let todos = [...this.state.todos, todo];
            this.setState({ todos, value: '', snackOpen: true, snackMessage: 'ToDo added successfully!', snackSeverity: 'success' },
                () => localStorage.setItem('todos', JSON.stringify(todos)));
        }
    };

    handleSnackClose = () => this.setState({ snackOpen: false });

    toggleCheckBox = index => this.setState({ todos: this.state.todos.map((todo, i) => i === index ? { ...todo, checked: !todo.checked } : todo) },
        () => localStorage.setItem('todos', JSON.stringify(this.state.todos)));

    handleEditClick = index => this.setState({ todos: this.state.todos.map((todo, i) => i === index ? { ...todo, isEditable: !todo.isEditable } : todo) },
        () => localStorage.setItem('todos', JSON.stringify(this.state.todos)));

    handleEditTodo = (index, value) => this.setState({
        snackOpen: true, snackMessage: 'ToDo edited successfully!', snackSeverity: 'success',
        todos: this.state.todos.map((todo, i) => i === index ? { value, checked: false, isEditable: false } : todo)
    }, () => localStorage.setItem('todos', JSON.stringify(this.state.todos)));

    handleDeleteTodo = index => this.setState({
        snackOpen: true, snackMessage: 'ToDo deleted successfully!', snackSeverity: 'success',
        todos: this.state.todos.filter((todo, i) => i !== index)
    }, () => localStorage.setItem('todos', JSON.stringify(this.state.todos)));

    render = () => {
        const { value, todos, snackMessage, snackOpen, snackSeverity } = this.state;
        const { containerStyle } = this.props;

        return <Page>
            <div className={classes.todosContainer}>
                <div className={classes.todosHeader}>ToDos Manager</div>
                <div className={classes.addTodosContainer} style={containerStyle}>
                    <div className={classes.addTodoWrapper}>
                        <Input id='add-todo' label='Add ToDo' onChange={this.handleValueChange} value={value} variant='outlined' rootInputStyles={{ backgroundColor: 'var(--text-light)', borderRadius: 'inherit' }} />
                        <Button className={classes.desktopBtn} onClick={this.handleAddTodo} labelStyles={{ display: 'inline-flex', padding: 0 }} endIcon={<NoteAddIcon />}>Add ToDo</Button>
                        <Iconbutton className={classes.mobileBtn} onClick={this.handleAddTodo} icon={<NoteAddIcon fontSize='large' />}></Iconbutton>
                    </div>
                </div>
                {!isEmptyList(todos) && <div className={classes.todosWrapper}>
                    {todos.map((todo, index) => {
                        return <Todo key={`todo-${index}`} index={index} todo={todo} toggleCheckBox={this.toggleCheckBox}
                            handleEditClick={this.handleEditClick} handleEditTodo={this.handleEditTodo} handleDeleteTodo={this.handleDeleteTodo} />
                    })}
                </div>}
                <SnackBar message={snackMessage} severity={snackSeverity} handleClose={this.handleSnackClose} open={snackOpen} />
            </div>
        </Page>;
    }
}