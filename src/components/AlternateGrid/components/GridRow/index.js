import React from 'react';
import { getPathValue, isEmptyObject } from '../../../../utils';
import GridCell from '../GridCell';

import classes from './styles.module.css';

const GridRow = React.memo(({ row, firstOrderClass, secondOrderClass }) => <div className={classes.row}>
    <GridCell className={firstOrderClass}>
        <div className={classes.infoContainer}>
            {row?.model && <div className={classes.model}>{row.model}</div>}
            {row?.specifications && !isEmptyObject(row.specifications) && Object.keys(row.specifications).map((entry, index) => <div className={classes.specification} key={`specification-${index}`}>
                <div className={classes.title}>{entry}</div>
                <div className={classes.value}>{row.specifications[entry]}</div>
            </div>)}
        </div>
    </GridCell>
    <GridCell className={secondOrderClass}>
        <img src={getPathValue(row, 'image', '')} alt='Lamborghini' className={classes.image} />
    </GridCell>
</div>);

export default GridRow;