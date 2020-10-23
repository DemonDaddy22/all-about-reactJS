import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import CodeCard from './components/CodeCard';

export default class KeyCodeSequence extends React.Component {

    // show an option to list of all the options

    state = {
        eventInfo: null
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyPress);
    }

    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.handleKeyPress);
    }

    handleKeyPress = e => {
        this.setState({ eventInfo: e });
    };
    // e.code - 'KeyK'
    // e.key - 'k'
    // e.keyCode - 75
    // which - 75 (deprecated)

    render = () => {
        const { eventInfo } = this.state;

        return <Page>
            <div className={classes.sequenceWrapper}>
                {!eventInfo ?
                    <div className={classes.noData}>Press a key to get details of the pressed key</div> :
                    <div className={classes.sequenceContainer}>
                        {eventInfo?.code && <CodeCard title='event.code' info={eventInfo.code} />}
                        {eventInfo?.key && <CodeCard title='event.key' info={eventInfo.key} />}
                        {eventInfo?.keyCode && <CodeCard title='event.keyCode' info={eventInfo.keyCode} />}
                        {eventInfo?.which && <CodeCard title='event.which' subTitle={'(deprecated)'} info={eventInfo.which} />}
                    </div>}
            </div>
        </Page>;
    }
}