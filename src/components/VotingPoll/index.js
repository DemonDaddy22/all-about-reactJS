import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import { poll } from './poll';
import PollOption from './components/PollOption';

export default class VotingPoll extends React.Component {

    state = {
        poll: poll
    }

    render = () => {
        const { title, options } = this.state.poll;

        return <Page>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <div className={classes.title}>{title}</div>
                    {options.map(option => <PollOption key={option?.id} option={option?.label} percentage={'25%'}></PollOption>)}
                </div>
            </div>
        </Page>;
    }
}