import React from 'react';

import classes from './styles.module.css';
import { getPathValue } from '../../../../utils';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

const TweetBlock = React.memo(({ tweet, blockBackground, color, secondaryColor, borderColor }) =>
    <div className={classes.tweet} style={{ backgroundColor: blockBackground, borderColor: borderColor }}>
        <div className={classes.column}>
            <img src={getPathValue(tweet, 'profile_pic', '')} alt={tweet.username} className={classes.profilePic}></img>
        </div>
        <div className={classes.column}>
            <div className={classes.titleWrapper}>
                <div style={{ color: color }} className={classes.name}>{getPathValue(tweet, 'name', '')}</div>
                {tweet?.is_verified && <div style={{ color: color }} className={classes.verified}><CheckCircleRoundedIcon fontSize='inherit' color='inherit' /></div>}
                <div style={{ color: secondaryColor }} className={classes.username}>@{getPathValue(tweet, 'username', '')}</div>
                <div style={{ color: secondaryColor }} className={classes.divider}>·</div>
                <div style={{ color: secondaryColor }} className={classes.time}>{getPathValue(tweet, 'post_time', '')}</div>
            </div>
        </div>
    </div>);

export default TweetBlock;