import React from 'react';

import classes from './styles.module.css';
import { Collapse } from '@material-ui/core';
import { isEmptyList } from '../../../../utils';
import JokeCard from '../JokeCard';

export default class LikedJokes extends React.Component {

    state = {
        likedJokes: []
    }

    componentDidMount = () => this.getLikedJokes(this.props.jokes);

    componentDidUpdate = prevProps => prevProps.jokes !== this.props.jokes && this.getLikedJokes(this.props.jokes);

    getLikedJokes = jokes => !isEmptyList(jokes) && this.setState({ likedJokes: jokes.filter(joke => joke.liked) });

    render = () => {
        const { loader, handleCopyJoke, handleLikeJoke } = this.props;

        return <>{isEmptyList(this.state.likedJokes) && !loader ? <div className={classes.noData}>Isn't this clear that you have to like some jokes first, LoL!</div> :
            <div className={classes.jokesContainer}>
                {this.state.likedJokes.map((joke, index) => <Collapse className={classes.collapseWrapper} key={joke.id || index} in={joke.visible} timeout={'auto'} mountOnEnter unmountOnExit>
                    <JokeCard className={classes.jokeWrapper} joke={joke} handleCopyJoke={handleCopyJoke} handleLikeJoke={handleLikeJoke} />
                </Collapse>)}
            </div>
        }</>
    }
}