import React from 'react';

import classes from './styles.module.css';
import CheckBox from '../../../../ui-components/CheckBox';

export default class Todo extends React.Component {

    render = () => {
        const { index, todo } = this.props;
        const { value, checked, isEditable } = todo;

        return <div className={classes.todo}>
            <CheckBox labelProps={{ style: { display: 'block', margin: 0 } }} checked={checked}
                onChange={() => this.props.toggleCheckBox(index)}></CheckBox>
            <div className={classes.label}>{value}</div>
            {/* checkbox */}
            {/* input/text based on isEditable */}
            {/* edit icon button */}
            {/* delete icon button */}
        </div>;
    }
}

{/* 
<Radio labelProps={{ style: { display: 'block', marginTop: 20 } }} label='Test' checked={this.state.checkedRadio} onChange={this.checkRadio}></Radio> */}