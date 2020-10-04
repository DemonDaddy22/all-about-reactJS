import React from 'react';

import classes from './styles.module.css';

const GameCard = React.memo(({option, style}) => {

    return <div style={style} className={classes.card}></div>
});

export default GameCard;