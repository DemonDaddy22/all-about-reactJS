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

        return <Page>
            <div className={classes.sequenceWrapper}>
                {!this.state.eventInfo ?
                    <div className={classes.noData}>Press a key to get details of the pressed key</div> :
                    <div className={classes.sequenceContainer}>
                        <CodeCard eventInfo={this.state.eventInfo} />    
                    </div>}
            </div>
        </Page>;
    }
}