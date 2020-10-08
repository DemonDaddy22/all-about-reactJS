import React from 'react';

import { Switch, FormControlLabel, withStyles } from '@material-ui/core';
import { BLUE_300, BLUE_700, BLUE_800, BLUE_200 } from '../../resources/colors';
import { themed } from '../../utils/theme';

const styles = {
    switchBase: props => ({
        // color: props.buttoncolor ? props.buttoncolor : BLUE_500,
        '&.Mui-checked': {
            color: props.buttoncolor ? props.buttoncolor : themed(BLUE_800, BLUE_700)
        },
        '& + .MuiSwitch-track': {
            backgroundColor: 'var(--text-obscurer)'
        },
        '&.Mui-checked + .MuiSwitch-track': {
            backgroundColor: props.trackcolor ? props.trackcolor : themed(BLUE_300, BLUE_200)
        },
        '&.MuiSwitch-colorSecondary.Mui-checked:hover': {
            backgroundColor: 'var(--hover-ripple)'
        },
    }),
    checked: {},
    track: {}
}

class CustomSwitch extends React.Component {

    render = () => {
        const { checked, disabled, handleChange, label, containerStyle } = this.props;

        return <FormControlLabel
            control={<Switch color='default' checked={checked} disabled={disabled} onChange={handleChange} {...this.props} />}
            label={label} style={containerStyle}
        />
    }
}

export default withStyles(styles)(CustomSwitch);