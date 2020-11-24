import React from 'react';
import GridCell from '../GridCell';

import classes from './styles.module.css';

const GridRow = React.memo(({ row }) => <div className={classes.row}>
    <GridCell />
    <GridCell />
</div>);

export default GridRow;