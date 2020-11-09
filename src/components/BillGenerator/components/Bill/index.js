import React from 'react';

import classes from './styles.module.css';

const Bill = React.memo(({}) => {
    return <>
        <div className={classes.title}>ORDER SUMMARY</div>
        <div className={classes.noData}>You haven't seleced any item yet :(</div>
    </>;
});

export default Bill;