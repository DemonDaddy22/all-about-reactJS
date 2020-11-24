import React from 'react';

import classes from './styles.module.css';

const GridCell = React.memo(({ children, className }) => <div className={`${className} ${classes.cell}`}>
    {children}
</div>);

export default GridCell;