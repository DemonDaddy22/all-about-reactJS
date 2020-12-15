import React from 'react';

import classes from './styles.module.css';
import Skeleton, { SKELETON_TYPES } from '../Skeleton';
import Shimmer from '../Shimmer';

const SkeletonWrapper = React.memo(() => <div className={classes.skeletonWrapper}>
    <div className={classes.col1}>
        <Skeleton type={SKELETON_TYPES['AVATAR']} />
    </div>
    <div className={classes.col2}>
        <Skeleton type={SKELETON_TYPES['TITLE']} style={{ marginBottom: 8 }} />
        <Skeleton type={SKELETON_TYPES['TEXT']} style={{ marginBottom: 8 }} />
        <Skeleton type={SKELETON_TYPES['TEXT']} style={{ marginBottom: 8 }} />
        <Skeleton type={SKELETON_TYPES['TEXT']} style={{ width: '60%' }}/>
    </div>
    <Shimmer />
</div>);

export default SkeletonWrapper;