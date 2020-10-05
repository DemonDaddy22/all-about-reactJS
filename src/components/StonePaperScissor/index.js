import React, { useState } from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import Button from '../../ui-components/Button';
import ResultView from './components/ResultView';
import GameView from './components/GameView';

const OPTIONS = Object.freeze({
    STONE: { title: 'stone', image: 'https://svgsilh.com/svg/2385848.svg' },
    PAPER: { title: 'paper', image: 'https://svgsilh.com/svg/643456.svg' },
    SCISSOR: { title: 'scissor', image: 'https://svgsilh.com/svg/643631.svg' }
});

const StonePaperScissor = React.memo(props => {

    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(JSON.parse(localStorage.getItem('score') || 0));
    const [selectedOption, setSelectedOption] = useState(null);

    const resetScore = () => {
        localStorage.setItem('score', JSON.stringify(0));
        setScore(0);
        setShowResult(false);
    }

    return <Page>
        <div className={classes.gameContainer}>
            <div className={classes.gameHeader}>
                Stone-Paper-Scissor
            </div>
            <div className={classes.scoreWrapper}>
                <div className={classes.score}>
                    Score: {score}
                </div>
                <Button variant='outlined' borderColor='var(--secondary-theme-color)' labelColor='var(--secondary-theme-color)' backgroundColor='var(--secondary-theme-color)'
                    className={classes.resetBtn} onClick={resetScore} labelStyles={{ display: 'inline-flex', padding: 0 }}>Reset Score</Button>
            </div>
            <div className={classes.contentWrapper}>
                {showResult ?
                    <ResultView selectedOption={selectedOption} options={OPTIONS} score={score} setScore={setScore} toggleView={() => setShowResult(false)} /> :
                    <GameView options={OPTIONS} selectOption={setSelectedOption} toggleView={() => setShowResult(true)} />}
            </div>
        </div>
    </Page>
});

export default StonePaperScissor;