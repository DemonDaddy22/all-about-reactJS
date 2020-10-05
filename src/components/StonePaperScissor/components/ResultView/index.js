import React, { useEffect, useState } from 'react';
import { GREEN_400, ORANGE_400, RED_400 } from '../../../../resources/colors';
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

    const [randomOption, setRandomOption] = useState(null);
    const [playerResult, setPlayerResult] = useState(results.DRAW);

    useEffect(() => {
        if (!isEmptyObject(options)) {
            const computerOption = options[getRandomOptionKey(options)];
            const result = getResult(computerOption);

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

    const getResult = (computerOption = {}) => {
        if (selectedOption.title === computerOption.title) return results.DRAW;
        else if ((selectedOption.title === 'paper' && computerOption.title === 'stone') ||
            (selectedOption.title === 'stone' && computerOption.title === 'scissor') ||
            (selectedOption.title === 'scissor' && computerOption.title === 'paper')) return results.WIN;
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
                    <GameCard cardStyle={{ border: `6px solid ${playerResult === results.WIN ? GREEN_400 : playerResult === results.LOSE ? RED_400 : ORANGE_400}` }} toggleView={toggleView} option={selectedOption} />
                    <GameCard cardStyle={{ border: `6px solid ${playerResult === results.WIN ? GREEN_400 : playerResult === results.LOSE ? RED_400 : ORANGE_400}` }} toggleView={toggleView} option={randomOption} />
                </div>
                <Button variant='outlined' borderColor='var(--theme-color)' labelColor='var(--theme-color)' backgroundColor='var(--theme-color)'
                    className={classes.resetBtn} onClick={toggleView} labelStyles={{ display: 'inline-flex', padding: 0 }}>Try Again</Button>
            </>}
    </div>;
});

export default ResultView;