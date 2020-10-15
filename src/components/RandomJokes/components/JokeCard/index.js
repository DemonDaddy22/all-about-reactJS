import React from 'react';

import classes from './styles.module.css';

const JokeCard = React.memo(({ joke }) => <div className={classes.jokeContainer}>
    {joke?.joke && <div className={classes.joke}>{joke.joke}</div>}
</div>)

export default JokeCard;