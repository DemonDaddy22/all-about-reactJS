import React from 'react';
import './styles.module.css';
import classes from './styles.module.css';

export default class Page extends React.Component {

    render = () => <div className={classes.page}>
        {this.props.children}
    </div>
}