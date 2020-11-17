import React from 'react';

import { FormControlLabel, withStyles } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import { THEME_COLOR } from '../../resources/colors';
import classes from './styles.module.css';

const styles = {
    root: props => ({
        height: props.height ? props.height : 16,
        width: props.width ? props.width : 16,
        color: props.color ? props.color : THEME_COLOR,
        '&$checked': {
            color: props.color ? props.color : THEME_COLOR
        },
        ...props.radioStyles
    })
};

class RadioButton extends React.Component {

    render = () => {
        const { checked, disabled, label, labelProps } = this.props;

        return <FormControlLabel classes={{ label: classes.label }} label={label} control={
            <Radio color='default' checked={checked} disabled={disabled} {...this.props} />
        } {...labelProps}></FormControlLabel>
    }
}

export default withStyles(styles)(RadioButton);