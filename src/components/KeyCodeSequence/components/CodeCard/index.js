import React from 'react';

import classes from './styles.module.css';

const CodeCard = React.memo(({ eventInfo }) => {

    return <>{eventInfo.keyCode}</>
});

export default CodeCard;