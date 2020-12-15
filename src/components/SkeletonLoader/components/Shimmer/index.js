import React from 'react';

import classes from './styles.module.css';

const Shimmer = React.memo(() => <div className={classes.shimmerWrapper}>
    <div className={classes.shimmer}></div>
</div>);

export default Shimmer;