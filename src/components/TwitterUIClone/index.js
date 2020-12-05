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
            <div style={{ borderColor: themed('#ebeef0', '#37454d') }} className={classes.container}>
                {tweets.map((tweet, index) => <TweetBlock key={`tweet-${index}`} tweet={tweet}
                    blockBackground={themed('#fff', '#15212b')} color={themed('#0f151b', '#fff')}
                    secondaryColor={themed('#5b7083', '#8899a6')} borderColor={themed('#ebeef0', '#37454d')} />)}
            </div>
        </Page>;
    }
}