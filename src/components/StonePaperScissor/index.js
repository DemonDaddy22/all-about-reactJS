import React, { useState } from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import Button from '../../ui-components/Button';
import ResultView from './components/ResultView';
import GameView from './components/GameView';

const StonePaperScissor = React.memo(props => {

    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(JSON.parse(localStorage.getItem('score') || 0));

    const resetScore = () => {
        localStorage.setItem('score', JSON.stringify(0));
        setScore(0);
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
                <Button variant='outlined' borderColor='var(--secondary-theme-color)' labelColor='var(--secondary-theme-color)' className={classes.resetBtn}
                    onClick={resetScore} labelStyles={{ display: 'inline-flex', padding: 0 }}>Reset Score</Button>
            </div>
            <div className={classes.contentWrapper}>
                {showResult ? <ResultView /> : <GameView />}
            </div>
        </div>
    </Page>
});

export default StonePaperScissor;