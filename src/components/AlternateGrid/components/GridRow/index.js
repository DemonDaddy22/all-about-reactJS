import React from 'react';
import GridCell from '../GridCell';

import classes from './styles.module.css';

const GridRow = React.memo(({ row, firstOrderClass, secondOrderClass }) => <div className={classes.row}>
    <GridCell className={firstOrderClass}>Cell 1</GridCell>
    <GridCell className={secondOrderClass}>Cell 2</GridCell>
</div>);

export default GridRow;