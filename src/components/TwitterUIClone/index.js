import React from 'react';

import classes from './styles.module.css';
import { tweets } from './tweets';
import Page from '../../ui-components/Page';
import TweetBlock from './components/TweetBlock';
import { themed } from '../../utils/theme';

export default class TwitterUIClone extends React.Component {

    updateComponent = (refresher = null) => refresher && this.setState({ refresher });

    render = () => {

        return <Page shouldComponentUpdate={this.updateComponent}>
            <div style={{ borderColor: themed('#546873', '#37454d') }} className={classes.container}>
                {tweets.map((tweet, index) => <TweetBlock key={`tweet-${index}`} tweet={tweet}
                    blockBackground={themed('#fff', '#15212b')} color={themed('#000', '#fff')}
                    secondaryColor={themed('#546873', '#8899a6')} borderColor={themed('#546873', '#37454d')} />)}
            </div>
        </Page>;
    }
}