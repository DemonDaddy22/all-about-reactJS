import React from 'react';

import classes from './styles.module.css';
import CheckBox from '../../../../ui-components/CheckBox';
import Iconbutton from '../../../../ui-components/Button/Iconbutton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import DeleteOutlineRoundedIcon from '@material-ui/icons/DeleteOutlineRounded';

export default class Todo extends React.Component {

    render = () => {
        const { index, todo } = this.props;
        const { value, checked, isEditable } = todo;

        return <div className={classes.todo}>
            <CheckBox labelProps={{ style: { display: 'inherit', margin: 0 } }} checked={checked}
                onChange={() => this.props.toggleCheckBox(index)}></CheckBox>
            <div className={classes.label}>{value}</div>
            <Iconbutton className={classes.iconBtn} onClick={this.handleAddTodo} icon={<EditRoundedIcon fontSize='default' />}></Iconbutton>
            <Iconbutton className={classes.iconBtn} onClick={this.handleAddTodo} icon={<DeleteOutlineRoundedIcon fontSize='default' />}></Iconbutton>
            {/* checkbox */}
            {/* input/text based on isEditable */}
            {/* edit icon button */}
            {/* delete icon button */}
        </div>;
    }
}

{/* 
<Radio labelProps={{ style: { display: 'block', marginTop: 20 } }} label='Test' checked={this.state.checkedRadio} onChange={this.checkRadio}></Radio> */}