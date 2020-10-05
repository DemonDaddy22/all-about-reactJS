import React, { useEffect, useState } from 'react';
import Button from '../../../../ui-components/Button';
import { isEmptyObject } from '../../../../utils';
import GameCard from '../GameCard';

import classes from './styles.module.css';

const results = Object.freeze({
    DRAW: 0,
    LOSE: 1,
    WIN: 2
});

const ResultView = React.memo(({ selectedOption, options, score, setScore, toggleView }) => {

    // console log to check if component renders if props aren't changed
    // change border colour of cards based on result
    // display result text
    // get random option from set of options
    const [randomOption, setRandomOption] = useState(null);
    const [playerResult, setPlayerResult] = useState(results.DRAW);

    useEffect(() => {
        console.log("render results");
        if (!isEmptyObject(options)) {
            const computerOption = options[getRandomOptionKey(options)];
            const result = getResult(selectedOption, computerOption);

            setRandomOption(computerOption);
            setPlayerResult(result);

            if (result === results.WIN) {
                localStorage.setItem('score', JSON.stringify(score + 1));
                setScore(score + 1);
            } else {
                localStorage.setItem('score', JSON.stringify(score));
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getRandomOptionKey = options => Object.keys(options)[Math.floor(Math.random() * Object.keys(options).length)];

    const getResult = (userOption = {}, computerOption = {}) => {
        if (userOption.title === computerOption.title) return results.DRAW;
        else if ((userOption.title === 'paper' && computerOption.title === 'stone') ||
            (userOption.title === 'stone' && computerOption.title === 'scissor') ||
            (userOption.title === 'scissor' && computerOption.title === 'paper')) return results.WIN;
        else return results.LOSE;
    }

    return <div className={classes.resultWrapper}>
        {(randomOption && selectedOption) &&
            <>
                <div className={classes.resultText}>
                    {playerResult === results.WIN ? 'You won!'
                        : playerResult === results.LOSE ? 'You lost!'
                            : 'You drew!'}
                </div>
                <div className={classes.cardsWrapper}>
                    <GameCard toggleView={toggleView} option={selectedOption} />
                    <GameCard toggleView={toggleView} option={randomOption} />
                </div>
                <Button variant='outlined' borderColor='var(--theme-color)' labelColor='var(--theme-color)' backgroundColor='var(--theme-color)'
                    className={classes.resetBtn} onClick={toggleView} labelStyles={{ display: 'inline-flex', padding: 0 }}>Try Again</Button>
            </>}
    </div>;
});

export default ResultView;