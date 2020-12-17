import React from 'react';
import { isEmptyString } from '../../../../utils';

import classes from './styles.module.css';

const Post = React.memo(({ avatar, title, body }) => <div className={classes.post}>
    {!isEmptyString(avatar) && <div className={classes.col1}>
        <img src={avatar} alt={title} className={classes.avatar} />
    </div>}
    <div className={classes.col2}>
        <div className={classes.title}>{title}</div>
        <div className={classes.body}>{body}</div>
    </div>
</div>);

export default Post;