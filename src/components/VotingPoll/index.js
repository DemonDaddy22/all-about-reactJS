import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import { poll } from './poll';
import PollOption from './components/PollOption';
import { getPathValue, isEmptyList, isEmptyObject } from '../../utils';
import { themed } from '../../utils/theme';
import { BLUE_400, BLUE_600, BLUE_700, BLUE_900 } from '../../resources/colors';

export default class VotingPoll extends React.Component {

    state = {
        poll: poll,
        selectedOption: null,
        prevOption: null
    }

    updateComponent = (refresher = null) => refresher && this.setState({ refresher });

    getPercentage = (option, options) => {
        if (isEmptyList(options) || isEmptyObject(option)) return 0;

        const total = options.reduce((accu, curr) => accu + getPathValue(curr, 'count', 0), 0);
        return ((getPathValue(option, 'count', 0) / total) * 100).toFixed(2);
    }

    getTotalVotes = options => isEmptyList(options) ? 0 : options.reduce((accu, curr) => accu + getPathValue(curr, 'count', 0), 0);

    handleOptionClick = option => {
        if (isEmptyObject(option) || (getPathValue(option, 'id') === getPathValue(this.state.selectedOption, 'id'))) return;
        
        const prevOption = this.state.selectedOption ? { ...this.state.selectedOption, count: getPathValue(this.state.selectedOption, 'count', 1) - 1 } : null;
        const selectedOption = { ...option, count: getPathValue(option, 'count', 0) + 1 };

        let options = this.updateOptions(this.updateOptions([...getPathValue(this.state.poll, 'options', [])], selectedOption), prevOption);
        this.setState({ prevOption, selectedOption, poll: { ...this.state.poll, options } });
    }

    updateOptions = (options, option) => {
        if (isEmptyList(options)) return [];
        if (isEmptyObject(option)) return options;
        return options.map(entry => entry?.id === option?.id ? option : entry);
    }

    render = () => {
        const { title, options } = this.state.poll;
        const totalVotes = this.getTotalVotes(options);

        return <Page shouldComponentUpdate={this.updateComponent}>
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <div className={classes.title}>{title}</div>
                    {options.map(option => <PollOption key={option?.id} option={option} onClick={this.handleOptionClick}
                        percentage={this.getPercentage(option, options)} isSelected={this.state.selectedOption?.id === option?.id}
                        color='var(--text)' backgroundColor={themed(BLUE_600, BLUE_400)} selectedColor={themed(BLUE_900, BLUE_700)}></PollOption>)}
                    {totalVotes && <div className={classes.info}>Total votes: {totalVotes}</div>}
                </div>
            </div>
        </Page>;
    }
}