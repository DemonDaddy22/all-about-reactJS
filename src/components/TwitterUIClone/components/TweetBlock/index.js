import React from 'react';

import classes from './styles.module.css';

const TweetBlock = React.memo(({ tweet }) => <div className={classes.tweet}>
    {tweet.content}
</div>);

export default TweetBlock;