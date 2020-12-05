import React from 'react';

import classes from './styles.module.css';
import { getPathValue } from '../../../../utils';
import Iconbutton from '../../../../ui-components/Button/Iconbutton';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import LoopRoundedIcon from '@material-ui/icons/LoopRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';

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
            <div style={{ color: color }} className={classes.content}>{getPathValue(tweet, 'content', '')}</div>
            {tweet?.content_img && <img src={getPathValue(tweet, 'content_img')} alt='content' className={classes.contentImg} style={{ border: `1px solid ${borderColor}` }}></img>}
            <div className={classes.buttonsWrapper}>
                <div style={{ color: secondaryColor }} className={classes.buttonGroup}>
                    <Iconbutton iconColor={secondaryColor} iconhovercolor='#1ea2f1' onClick={() => { }} icon={<ChatBubbleOutlineRoundedIcon fontSize='small' />}></Iconbutton>
                    <div className={classes.buttonLabel}>{getPathValue(tweet, 'comments', 0)}</div>
                </div>
                <div style={{ color: secondaryColor }} className={classes.buttonGroup}>
                    <Iconbutton iconColor={secondaryColor} iconhovercolor='#19be63' onClick={() => { }} icon={<LoopRoundedIcon fontSize='small' />}></Iconbutton>
                    <div className={classes.buttonLabel}>{getPathValue(tweet, 'retweets', 0)}</div>
                </div>
                <div style={{ color: secondaryColor }} className={classes.buttonGroup}>
                    <Iconbutton iconColor={secondaryColor} iconhovercolor='#e0255e' onClick={() => { }} icon={<FavoriteBorderRoundedIcon fontSize='small' />}></Iconbutton>
                    <div className={classes.buttonLabel}>{getPathValue(tweet, 'likes', 0)}</div>
                </div>
                <div style={{ color: secondaryColor }} className={classes.buttonGroup}>
                    <Iconbutton iconColor={secondaryColor} iconhovercolor='#1ea2f1' onClick={() => { }} icon={<ShareRoundedIcon fontSize='small' />}></Iconbutton>
                </div>
            </div>
        </div>
    </div>);

export default TweetBlock;