import React from 'react';

import classes from './styles.module.css';

export default class Todo extends React.Component {

    render = () => {
        const { index, todo } = this.props;
        const { value, isEditable } = todo;

        return <div className={classes.todo}>
            <h4>{value} - {`${isEditable}`}</h4>
            {/* checkbox */}
            {/* input/text based on isEditable */}
            {/* edit icon button */}
            {/* delete icon button */}
        </div>;
    }
}

{/* <CheckBox labelProps={{ style: { display: 'block', marginTop: 20 } }} label='Test' checked={this.state.checkedBox} onChange={this.toggleCheckBox}></CheckBox>
<Radio labelProps={{ style: { display: 'block', marginTop: 20 } }} label='Test' checked={this.state.checkedRadio} onChange={this.checkRadio}></Radio> */}