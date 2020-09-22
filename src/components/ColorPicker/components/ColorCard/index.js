import React from 'react';

import classes from './styles.module.css';

export default class ColorCard extends React.Component {

    render = () => {

        return <div className={classes.card} style={{ backgroundColor: this.props.colour }} onClick={() => this.props.handleColourChange(this.props.colour)}></div>;
    }
}