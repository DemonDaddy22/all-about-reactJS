import React from 'react';

import classes from './styles.module.css';

export default class Todo extends React.Component {

    render = () => {
        const { index, todo, isEditable } = this.props;

        return <>
            {/* checkbox */}
            {/* input/text based on isEditable */}
            {/* edit icon button */}
            {/* delete icon button */}
        </>;
    }
}