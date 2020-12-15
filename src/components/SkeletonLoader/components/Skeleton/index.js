import React from 'react';
import PropTypes from 'prop-types';

import classes from './styles.module.css';

export const SKELETON_TYPES = Object.freeze({
    TEXT: 'skeletonText',
    TITLE: 'skeletonTitle',
    IMAGE: 'skeletonImage',
    AVATAR: 'skeletonAvatar'
});

const Skeleton = React.memo(({ type, style }) => {
    const skeletonClass = `${classes[type]}`;

    return <div style={style} className={skeletonClass} />;
});

export default Skeleton;

Skeleton.prototype = {
    type: PropTypes.string.isRequired,
    style: PropTypes.object
}

Skeleton.defaultProps = {
    type: SKELETON_TYPES.TEXT
}