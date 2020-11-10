import React from 'react';

import classes from './styles.module.css';
import Input from '../../../../ui-components/Input';
import CustomSwitch from '../../../../ui-components/Switch';
import Label from '../../../../ui-components/Label';
import { InputAdornment } from '@material-ui/core';

const TacoMenu = React.memo(({ tacos, sides, addOns, handleTacoChange, handleSideChange, handleAddOnChange }) => {
    return <>
        <div className={classes.menuTitle}>Menu</div>
        <div className={classes.divider}></div>
        <div className={classes.categoryContainer}>
            <div className={classes.categoryTitle}>Tacos</div>
            <div className={classes.categoryContent}>
                <Input id='bean-taco' type='number' onChange={e => handleTacoChange(e, 'beans')} value={tacos.beans.count} variant='outlined' fullWidth
                    helperText='3 types of beans, diced tomatoes, onions, gouda cheese on lettuce bed' label='3 Beans'
                    rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} InputProps={{
                        endAdornment: <InputAdornment position='end'><div className={classes.adornmentLabel}>{`$${tacos.beans.price}`}</div></InputAdornment>,
                    }} />
                <Input id='chicken-breast-taco' type='number' onChange={e => handleTacoChange(e, 'chicken')} value={tacos.chicken.count} variant='outlined' fullWidth
                    helperText='Grilled chicken breast strips, diced tomatoes, jalapenõs, gruyere cheese on lettuce bed' label='Grilled Chicken Breast'
                    rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} InputProps={{
                        endAdornment: <InputAdornment position='end'><div className={classes.adornmentLabel}>{`$${tacos.chicken.price}`}</div></InputAdornment>,
                    }} />
                <Input id='fish-taco' type='number' onChange={e => handleTacoChange(e, 'fish')} value={tacos.fish.count} variant='outlined' fullWidth
                    helperText='Hot and crispy fish, diced tomatoes, onions, chilli, lemon juice on lettuce bed' label='Crispy Fish'
                    rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} InputProps={{
                        endAdornment: <InputAdornment position='end'><div className={classes.adornmentLabel}>{`$${tacos.fish.price}`}</div></InputAdornment>,
                    }} />
                <Input id='pork-taco' type='number' onChange={e => handleTacoChange(e, 'pork')} value={tacos.pork.count} variant='outlined' fullWidth
                    helperText='Pulled pork, diced tomatoes, jalapenõs, onions, chilli, swiss cheese on lettuce bed' label='Pulled Pork'
                    rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} InputProps={{
                        endAdornment: <InputAdornment position='end'><div className={classes.adornmentLabel}>{`$${tacos.pork.price}`}</div></InputAdornment>,
                    }} />
            </div>
        </div>
        <div className={classes.categoryContainer}>
            <div className={classes.categoryTitle}>Sides</div>
            <div className={classes.categoryContent}>
                <Input id='veg-quesadilla' type='number' onChange={() => { }} value={0} variant='outlined' fullWidth
                    label='Veg Quesadilla' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} InputProps={{
                        endAdornment: <InputAdornment position='end'><div className={classes.adornmentLabel}>$1.99</div></InputAdornment>,
                    }} />
                <Input id='chicken-quesadilla' type='number' onChange={() => { }} value={0} variant='outlined' fullWidth
                    label='Chicken Quesadilla' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} InputProps={{
                        endAdornment: <InputAdornment position='end'><div className={classes.adornmentLabel}>$2.49</div></InputAdornment>,
                    }} />
                <Input id='mexican-fries' type='number' onChange={() => { }} value={0} variant='outlined' fullWidth
                    label='Mexican Fries' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} InputProps={{
                        endAdornment: <InputAdornment position='end'><div className={classes.adornmentLabel}>$2.49</div></InputAdornment>,
                    }} />
                <Input id='soda' type='number' onChange={() => { }} value={0} variant='outlined' fullWidth
                    label='Soda' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} InputProps={{
                        endAdornment: <InputAdornment position='end'><div className={classes.adornmentLabel}>$1.49</div></InputAdornment>,
                    }} />
            </div>
        </div>
        <div className={classes.categoryContainer}>
            <div className={classes.categoryTitle}>Add-ons <span className={classes.addOnPrice}>(each for $0.99)</span></div>
            <div className={classes.categoryContent} style={{ marginTop: '0.5rem' }}>
                <div className={classes.addOnContainer}>
                    <Label label='Extra Cheese' className={classes.addOn} />
                    <CustomSwitch onChange={() => { }} checked={true} containerStyle={{ marginRight: 0 }} />
                </div>
                <div className={classes.addOnContainer}>
                    <Label label='Extra Beans' className={classes.addOn} />
                    <CustomSwitch onChange={() => { }} checked={false} containerStyle={{ marginRight: 0 }} />
                </div>
            </div>
        </div>
    </>;
});

export default TacoMenu;