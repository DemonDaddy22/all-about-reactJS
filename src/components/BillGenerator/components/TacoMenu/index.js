import React from 'react';

import classes from './styles.module.css';
import Input from '../../../../ui-components/Input';
import { InputAdornment } from '@material-ui/core';

const TacoMenu = React.memo(({ }) => {
    return <>
        <div className={classes.menuTitle}>Menu</div>
        <div className={classes.divider}></div>
        <div className={classes.categoryContainer}>
            <div className={classes.categoryTitle}>Tacos</div>
            <div className={classes.categoryContent}>
                <Input id='bean-taco' type='number' onChange={() => { }} value={0} variant='outlined' fullWidth
                    helperText='3 types of beans, diced tomatoes, onions, gouda cheese on lettuce bed' label='3 Beans'
                    rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} InputProps={{
                        endAdornment: <InputAdornment position='end'><div className={classes.adornmentLabel}>$2.99</div></InputAdornment>,
                    }} />
                <Input id='chicken-breast-taco' type='number' onChange={() => { }} value={0} variant='outlined' fullWidth
                    helperText='Grilled chicken breast strips, diced tomatoes, jalapenõs, gruyere cheese on lettuce bed' label='Grilled Chicken Breast'
                    rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} InputProps={{
                        endAdornment: <InputAdornment position='end'><div className={classes.adornmentLabel}>$3.49</div></InputAdornment>,
                    }} />
                <Input id='fish-taco' type='number' onChange={() => { }} value={0} variant='outlined' fullWidth
                    helperText='Hot and crispy fish, diced tomatoes, onions, chilli, lemon juice on lettuce bed' label='Crispy Fish'
                    rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} InputProps={{
                        endAdornment: <InputAdornment position='end'><div className={classes.adornmentLabel}>$3.49</div></InputAdornment>,
                    }} />
                <Input id='pork-taco' type='number' onChange={() => { }} value={0} variant='outlined' fullWidth
                    helperText='Pulled pork, diced tomatoes, jalapenõs, onions, chilli, swiss cheese on lettuce bed' label='Pulled Pork'
                    rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} InputProps={{
                        endAdornment: <InputAdornment position='end'><div className={classes.adornmentLabel}>$3.99</div></InputAdornment>,
                    }} />
            </div>
        </div>
    </>;
});

export default TacoMenu;