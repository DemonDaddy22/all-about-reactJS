import React from 'react';

import classes from './styles.module.css';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

const QuoteCard = React.memo(({ quote, className, handleCopyQuote }) => <div className={`${classes.quoteCard} ${className}`} onClick={() => handleCopyQuote(quote)}>
    <div className={classes.quote}>{quote}</div>
    <div className={classes.button}>
        <FileCopyOutlinedIcon fontSize='small' />
    </div>
</div>);

export default QuoteCard;