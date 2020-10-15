import React from 'react';

import classes from './styles.module.css';
import { handleError, isEmptyList, isEmptyObject, isEmptyString } from '../../utils';
import Page from '../../ui-components/Page';
import SpinnerLoader from '../../ui-components/SpinnerLoader';

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
        this.setState({ loader: false, jokes: [...this.state.jokes, ...jokes] });
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

    render = () => {
        const { jokes, loader } = this.state;

        return <Page>
            {loader ? <SpinnerLoader /> :
                isEmptyList(jokes) ? <div>Couldn't find any jokes to amuse you, LoL!</div> :
                    jokes.map(joke => <div>{joke?.joke}</div>)}
        </Page>;
    }
}