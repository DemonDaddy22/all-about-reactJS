import React from 'react';

import classes from './styles.module.css';

const CodeCard = React.memo(({ title, subTitle, info }) => {

    return <div className={classes.cardWrapper}>
        <div className={classes.titleWrapper} style={!subTitle ? { justifyContent: 'center' } : { justifyContent: 'space-between' }}>
            <div className={classes.title}>{title}</div>
            <div className={classes.subTitle}>{subTitle || ''}</div>
        </div>
        <div className={classes.info}>{info}</div>
    </div>
});

export default CodeCard;