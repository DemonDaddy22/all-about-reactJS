import React from 'react';
import Input from '../../../../ui-components/Input';

import classes from './styles.module.css';

const TacoMenu = React.memo(({ }) => {
    return <>
        <div className={classes.menuTitle}>Menu</div>
        <div className={classes.divider}></div>
        <div className={classes.categoryContainer}>
            <div className={classes.categoryTitle}>Tacos</div>
            <div className={classes.categoryContent}>
                <Input id='veg-taco' type='number' onChange={() => { }} value={0} variant='outlined' fullWidth
                    helperText='Juicy beans will drive you crazy will drive you crazy' label='3 Beans' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} />
                <Input id='chicken-taco' type='number' onChange={() => { }} value={0} variant='outlined' fullWidth
                    label='Grilled Chicken Breast' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} />
            </div>
        </div>
    </>;
});

export default TacoMenu;