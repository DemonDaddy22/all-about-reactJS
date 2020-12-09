import React from 'react';

import classes from './styles.module.css';
import { isEmptyString } from '../../../../utils';

const PollOption = React.memo(({ option, percentage, isSelected, onClick, backgroundColor, color }) => <div className={classes.container}>
    <div className={classes.filledBar}></div>
    <div className={classes.content}>
        <div className={classes.label}>{!isEmptyString(option) ? option : ''}</div>
        <div className={classes.percentage}>{percentage ? percentage : ''}</div>
    </div>
</div>);

export default PollOption;