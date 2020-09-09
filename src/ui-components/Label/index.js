import React from 'react';

import classes from './styles.module.css';

export default class Label extends React.Component {

    render = () => {
        const { label, className, style } = this.props;

        return <div className={`${classes.label} ${className}`} style={style}>{label}</div>
    }
}
