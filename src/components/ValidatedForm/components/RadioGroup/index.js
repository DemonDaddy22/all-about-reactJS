import React from 'react';

import classes from './styles.module.css';
import { isEmptyList } from '../../../../utils';
import RadioButton from '../../../../ui-components/Radio';

const RadioGroup = React.memo(({ options, selectedOption, onChange, header, className }) => <div className={`${className} ${classes.radioGroupWrapper}`}>
    {header && <div className={classes.header}>{header}</div>}
    {!isEmptyList(options) && <div className={classes.radioGroup}>
        {options.map(option => <RadioButton label={option.label} checked={option.id === selectedOption.id} onChange={() => onChange(option)} />)}    
    </div>}
</div>);

export default RadioGroup;