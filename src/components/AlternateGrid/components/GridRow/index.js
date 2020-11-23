import React from 'react';

import classes from './styles.module.css';

const GridRow = React.memo(({ row }) => <div className={classes.row}>
    {row?.model}
</div>);

export default GridRow;