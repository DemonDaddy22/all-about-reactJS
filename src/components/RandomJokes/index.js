import React from 'react';

import classes from './styles.module.css';
import { handleError, isEmptyList, isEmptyObject, isEmptyString } from '../../utils';
import Page from '../../ui-components/Page';
import SpinnerLoader from '../../ui-components/SpinnerLoader';
import JokeCard from './components/JokeCard';
import { Collapse } from '@material-ui/core';
import Button from '../../ui-components/Button';

export default class RandomJokes extends React.Component {

    state = {
        jokes: [],
        loader: true
    }

    componentDidMount = () => this.fetchJokes();

    fetchJokes = (numJokes = 10) => this.setState({ loader: true }, async () => {
        let jokes = [];
        while (jokes.length < numJokes) {
            // this gave me some hard time
            // make sure you are handling promises wisely
            // and be 100% sure of what you are doing in a while loop, ran into an infinite loop and hanged up my browser
            const joke = await this.fetchJoke();
            if (!isEmptyObject(joke) && !isEmptyString(joke?.joke)) {
                jokes.push(joke);
            }
        }
        this.setState({ loader: false, jokes: [...this.state.jokes, ...jokes] }, () => {
            jokes.forEach((joke, index) => setTimeout(() => this.toggleJokeVisibility(joke.id, true), index * 50))
        });
    });

    fetchJoke = async () => {
        let joke = null;

        await fetch(`https://icanhazdadjoke.com`, {
            headers: {
                Accept: 'application/json'
            }
        })
            .then(handleError)
            .then(res => res.json())
            .then(data => { joke = data; })
            .catch(error => console.error(error));

        return joke;
    }

    toggleJokeVisibility = (id, visible, callback) => id && this.setState(prevState => ({
        jokes: prevState.jokes.map(joke => joke.id === id ? { ...joke, visible, liked: false } : joke)
    }), callback);

    handleLikeJoke = id => id && this.setState(prevState => ({
        jokes: prevState.jokes.map(joke => joke.id === id ? { ...joke, liked: !joke.liked } : joke)
    }));

    render = () => {
        const { jokes, loader } = this.state;

        return <Page>
            <>
                <div className={`${classes.loader} ${!loader && classes.hideLoader}`}><SpinnerLoader /></div>
                {isEmptyList(jokes) && !loader ? <div className={classes.noData}>Couldn't find any jokes to amuse you, LoL!</div> :
                    <div className={classes.jokesContainer}>
                        {jokes.map((joke, index) => <Collapse className={classes.collapseWrapper} key={joke.id || index} in={joke.visible} timeout={'auto'} mountOnEnter unmountOnExit>
                            <JokeCard className={classes.jokeWrapper} joke={joke} handleLikeJoke={this.handleLikeJoke} />
                        </Collapse>)}
                    </div>
                }</>
        </Page>;
    }
}