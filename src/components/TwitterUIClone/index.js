import React from 'react';

import classes from './styles.module.css';
import { tweets } from './tweets';
import Page from '../../ui-components/Page';
import TweetBlock from './components/TweetBlock';

export default class TwitterUIClone extends React.Component {

    render = () => {

        return <Page>
            <div className={classes.container}>
                {tweets.map((tweet, index) => <TweetBlock key={`tweet-${index}`} tweet={tweet} />)}
            </div>
        </Page>;
    }
}