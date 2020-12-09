import React from 'react';

import classes from './styles.module.css';

const PollOption = React.memo(({ option, percentage, isSelected, onClick, backgroundColor, color }) => <div className={classes.container} onClick={() => onClick(option)}>
    <div className={classes.filledBar}></div>
    <div className={classes.content}>
        <div className={classes.label}>{option?.label ? option.label : ''}</div>
        <div className={classes.percentage}>{percentage ? `${percentage}%` : '0.00%'}</div>
    </div>
</div>);

export default PollOption;