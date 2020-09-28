import React from 'react';

import classes from './styles.module.css';

export default class SpinnerLoader extends React.Component {
    render = () => <div style={{ width: this.props.size, height: this.props.size }} className={classes.tripleSpinner}></div>
}