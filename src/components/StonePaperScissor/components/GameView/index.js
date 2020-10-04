import React from 'react';
import GameCard from '../GameCard';

import classes from './styles.module.css';

const GameView = React.memo(({ options, selectOption }) => {

    return <>
        <div className={classes.cardsWrapper}>
            {Object.keys(options).map(option => <GameCard style={{ cursor: 'pointer' }} option={option} />)}
        </div>
    </>;
});

export default GameView;