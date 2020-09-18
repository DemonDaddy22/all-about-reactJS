import React from 'react';

import classes from './styles.module.css';

export default class InputButton extends React.Component {

    render = () => {
        const { flex, buttonContent, position } = this.props;

        return <div style={{ color: 'white' }}>{buttonContent}</div>
    }
}