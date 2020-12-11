import React from 'react';

import classes from './styles.module.css';

const PollOption = React.memo(({ option, percentage, isSelected, onClick, backgroundColor, color, selectedColor }) => <div style={{ borderColor: isSelected ? selectedColor : 'var(--border-color)'}} className={classes.container} onClick={() => onClick(option)}>
    <div style={{ backgroundColor: backgroundColor, flexBasis: `${percentage}%`, borderLeft: isSelected ? `10px solid ${selectedColor}` : 'none' }} className={classes.filledBar}></div>
    <div style={{ color: color }} className={classes.content}>
        <div className={classes.label}>{option?.label ? option.label : ''}</div>
        <div className={classes.percentage}>{percentage ? `${percentage}%` : '0.00%'}</div>
    </div>
</div>);

export default PollOption;