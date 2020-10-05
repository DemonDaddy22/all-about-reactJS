import React, { useEffect, useState } from 'react';
import Button from '../../../../ui-components/Button';
import { isEmptyObject } from '../../../../utils';
import GameCard from '../GameCard';

import classes from './styles.module.css';

const ResultView = React.memo(({ selectedOption, options, toggleView }) => {

    // console log to check if component renders if props aren't changed
    // change border colour of cards based on result
    // display result text
    // get random option from set of options
    const [randomOption, setRandomOption] = useState(null);

    useEffect(() => {
        if (!isEmptyObject(options)) setRandomOption(options[getRandomOptionKey(options)]);
    }, [options]);

    const getRandomOptionKey = options => Object.keys(options)[Math.floor(Math.random() * Object.keys(options).length)];

    return <div className={classes.resultWrapper}>
        {!randomOption || !selectedOption ?
            <div className={classes.errorText}>Something went wrong, please try again.</div> :
            <>
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