import React from 'react';

import classes from './styles.module.css';
import CheckBox from '../../../../ui-components/CheckBox';
import Iconbutton from '../../../../ui-components/Button/Iconbutton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import { GREEN_700, RED_700 } from '../../../../resources/colors';
import Input from '../../../../ui-components/Input';

export default class Todo extends React.Component {

    state = {
        value: this.props.todo.value
    }

    componentDidUpdate = prevProps => {
        if (prevProps.todo != this.props.todo) this.setState({ value: this.props.todo.value });
    }

    handleValueChange = e => this.setState({ value: e.target.value });

    handleEditTodo = index => {
        const updatedTodo = this.state.value;
        this.setState({ value: '' }, () => this.props.handleEditTodo(index, updatedTodo));
    }

    render = () => {
        const { index, todo } = this.props;
        const { value, checked, isEditable } = todo;

        return <div className={classes.todo}>
            {!isEditable && <CheckBox labelProps={{ style: { display: 'inherit', margin: 0 } }} checked={checked}
                onChange={() => this.props.toggleCheckBox(index)}></CheckBox>}
            {!isEditable ? <div className={classes.labelWrapper}>
                <div className={`${classes.label} ${checked && classes.strike}`}>{value}</div>
            </div> : <div className={classes.todoInputWrapper}>
                    <Input id='edit-todo' label='Edit Todo' onChange={this.handleValueChange} value={this.state.value}></Input>
                </div>}
            {!isEditable ? <>
                <Iconbutton iconColor={GREEN_700} className={classes.iconBtn} onClick={() => this.props.handleEditClick(index)} icon={<EditRoundedIcon fontSize='default' />}></Iconbutton>
                <Iconbutton iconColor={RED_700} className={classes.iconBtn} onClick={() => this.props.handleDeleteTodo(index)} icon={<DeleteOutlineRoundedIcon fontSize='default' />}></Iconbutton>
            </> : <>
                    <Iconbutton iconColor={RED_700} className={classes.iconBtn} onClick={() => this.props.handleEditClick(index)} icon={<CloseRoundedIcon fontSize='default' />}></Iconbutton>
                    <Iconbutton iconColor={GREEN_700} className={classes.iconBtn} onClick={() => this.handleEditTodo(index)} icon={<CheckRoundedIcon fontSize='default' />}></Iconbutton>
                </>}
        </div>;
    }
}