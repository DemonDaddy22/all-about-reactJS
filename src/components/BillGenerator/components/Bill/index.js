import React from 'react';

import classes from './styles.module.css';

const Bill = React.memo(({}) => {
    return <>
        <div className={classes.title}>Order Summary</div>
        <div className={classes.noData}>You haven't selected any item yet :(</div>
    </>;
});

export default Bill;