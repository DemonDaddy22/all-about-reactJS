import React from 'react';

import classes from './styles.module.css';

export const SKELETON_TYPES = Object.freeze({
    TEXT: 'skeletonText',
    TITLE: 'skeletonTitle',
    IMAGE: 'skeletonImage',
    AVATAR: 'skeletonAvatar'
});

const Skeleton = ({ type, style }) => {
    const skeletonClass = `classes.${SKELETON_TYPES[type]}`;

    return <div style={style} className={skeletonClass} />;
}

export default Skeleton;
