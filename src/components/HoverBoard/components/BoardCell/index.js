import React from 'react';

import classes from './styles.module.css';

export default class BoardCell extends React.Component {

    state = {
        isHovering: false
    }

    toggleHovering = hover => console.log(hover);

    render = () => <div onMouseEnter={() => this.toggleHovering(true)} onMouseLeave={() => this.toggleHovering(false)} className={classes.cell}></div>
}