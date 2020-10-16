import React from 'react';

import classes from './styles.module.css';
import { Collapse } from '@material-ui/core';
import { isEmptyList } from '../../../../utils';
import JokeCard from '../JokeCard';

export default class AllJokes extends React.Component {

    render = () => {
        const { jokes, loader, handleCopyJoke, handleLikeJoke } = this.props;

        return <>{isEmptyList(jokes) && !loader ? <div className={classes.noData}>Couldn't find any jokes to amuse you, LoL!</div> :
            <div className={classes.jokesContainer}>
                {jokes.map((joke, index) => <Collapse className={classes.collapseWrapper} key={joke.id || index} in={joke.visible} timeout={'auto'} mountOnEnter unmountOnExit>
                    <JokeCard className={classes.jokeWrapper} joke={joke} handleCopyJoke={handleCopyJoke} handleLikeJoke={handleLikeJoke} />
                </Collapse>)}
            </div>
        }</>
    }
}