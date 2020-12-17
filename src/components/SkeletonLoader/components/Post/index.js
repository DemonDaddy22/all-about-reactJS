import React from 'react';

import classes from './styles.module.css';

const Post = React.memo(({ name, avatar, title, body }) => <div className={classes.post}>
    <div className={classes.col1}>
        <img src={avatar || ''} alt={title} className={classes.avatar} />
        <div className={classes.name}>{name || ''}</div>
    </div>
    <div className={classes.col2}>
        <div className={classes.title}>{title || ''}</div>
        <div className={classes.body}>{body || ''}</div>
    </div>
</div>);

export default Post;