import React from 'react';

import classes from './styles.module.css';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { getPathValue } from '../../../../utils';

const JokeCard = React.memo(({ joke, className, handleCopyJoke, handleLikeJoke }) => {
    const jokeLiked = getPathValue(joke, 'liked', false);

    return <div className={`${classes.jokeContainer} ${className}`}>
        {joke?.joke && <div className={classes.joke}>{joke.joke}</div>}
        <div className={classes.buttonsWrapper}>
            <div className={`${classes.button} ${jokeLiked && classes.likedJoke}`} onClick={() => handleLikeJoke(joke?.id)}>
                {jokeLiked ?
                    <FavoriteRoundedIcon fontSize='small' /> :
                    <FavoriteBorderRoundedIcon fontSize='small' />}
            </div>
            <div className={classes.button} onClick={() => handleCopyJoke(joke?.joke)}>
                <FileCopyOutlinedIcon fontSize='small' />
            </div>
        </div>
    </div>
})

export default JokeCard;