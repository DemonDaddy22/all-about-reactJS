import React from 'react';

import classes from './styles.module.css';

const QuoteCard = React.memo(({quote}) => <div>{quote}</div>);

export default QuoteCard;