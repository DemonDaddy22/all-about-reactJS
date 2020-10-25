import React from 'react';

import classes from './styles.module.css';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

const QuoteCard = React.memo(({ quote, author, className, handleCopyQuote }) => <div className={`${classes.quoteCard} ${className}`} onClick={() => handleCopyQuote(quote)}>
    <div className={classes.quoteWrapper}>
        <div className={classes.quote}>{quote}</div>
        <div className={classes.button}>
            <FileCopyOutlinedIcon fontSize='small' />
        </div>
    </div>
    {author && <div className={classes.author}><em>- {author}</em></div>}
</div>);

export default QuoteCard;