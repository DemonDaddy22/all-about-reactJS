import React from 'react';

import classes from './styles.module.css';
import { copyTextToClipboard, handleError, isEmptyObject, isEmptyString } from '../../utils';
import Page from '../../ui-components/Page';
import SpinnerLoader from '../../ui-components/SpinnerLoader';
import { Tab, Tabs } from '@material-ui/core';
import AllJokes from './components/AllJokes';
import LikedJokes from './components/LikedJokes';

export default class RandomJokes extends React.Component {

    state = {
        jokes: [],
        currentTab: 0,
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

    handleCopyJoke = joke => !isEmptyString(joke) && copyTextToClipboard(joke);

    handleLikeJoke = id => id && this.setState(prevState => ({
        jokes: prevState.jokes.map(joke => joke.id === id ? { ...joke, liked: !joke.liked } : joke)
    }));

    onTabChange = (e, tab) => this.setState({ currentTab: tab });

    renderContent = tab => {
        switch (tab) {
            case 0:
                return <AllJokes jokes={this.state.jokes} loader={this.state.loader}
                    handleCopyJoke={this.handleCopyJoke} handleLikeJoke={this.handleLikeJoke} />
            case 1:
                return <LikedJokes jokes={this.state.jokes} />
        }
    }

    render = () => {
        const { currentTab, loader } = this.state;

        return <Page>
            <>
                <div className={`${classes.loader} ${!loader && classes.hideLoader}`}><SpinnerLoader /></div>
                <Tabs value={currentTab} onChange={this.onTabChange} classes={{ root: classes.tabsRoot, indicator: classes.tabIndicator }}>
                    <Tab label='All Jokes' classes={{ root: classes.tabRoot }} disableFocusRipple disableRipple disableTouchRipple></Tab>
                    <Tab label='Liked Jokes' classes={{ root: classes.tabRoot }} disableFocusRipple disableRipple disableTouchRipple></Tab>
                </Tabs>
                {this.renderContent(currentTab)}
            </>
        </Page>;
    }
}