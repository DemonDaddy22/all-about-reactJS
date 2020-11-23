import React from 'react';

import classes from './styles.module.css';

const GridCell = React.memo(({}) => <div className={classes.cell}>
    Cell
</div>);

export default GridCell;