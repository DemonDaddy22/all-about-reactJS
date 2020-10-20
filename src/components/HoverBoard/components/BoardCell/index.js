import React from 'react';
import { BLUE_400, BLUE_600, GREEN_400, GREEN_600, INDIGO_400, INDIGO_600, ORANGE_400, ORANGE_600, PURPLE_400, PURPLE_600, RED_400, RED_600, TEAL_400, TEAL_600, YELLOW_400, YELLOW_600 } from '../../../../resources/colors';
import { themed } from '../../../../utils/theme';

import classes from './styles.module.css';

const COLORS = Object.freeze({
    RED: themed(RED_600, RED_400),
    PURPLE: themed(PURPLE_600, PURPLE_400),
    BLUE: themed(BLUE_600, BLUE_400),
    GREEN: themed(GREEN_600, GREEN_400),
    ORANGE: themed(ORANGE_600, ORANGE_400),
    YELLOW: themed(YELLOW_600, YELLOW_400),
    TEAL: themed(TEAL_600, TEAL_400),
    INDIGO: themed(INDIGO_600, INDIGO_400)
});

const getColor = () => {
    const color = Object.keys(COLORS)[Math.floor(Object.keys(COLORS).length * Math.random())];
    return COLORS[color];
}

export default class BoardCell extends React.Component {

    state = {
        isHovering: false,
        isClicked: false,
        color: null
    }

    toggleHovering = hover => !this.state.isClicked && this.setState({ isHovering: hover, color: getColor() });

    toggleClicked = () => this.setState({ isClicked: !this.state.isClicked });

    render = () => {
        const { color } = this.state;
        const style = { backgroundColor: this.state.isHovering ? color : 'var(--card-bg)', boxShadow: this.state.isHovering ? `0 0 2px ${color}, 0 0 8px ${color}` : '0 0 2px var(--tag-color)' };

        return <div onMouseEnter={() => this.toggleHovering(true)} onMouseLeave={() => this.toggleHovering(false)}
            onClick={() => this.toggleClicked()} className={classes.cell} style={style}></div>
    }
}