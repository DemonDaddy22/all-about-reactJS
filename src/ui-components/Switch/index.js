import React from 'react';

import { Switch, FormControlLabel, withStyles } from '@material-ui/core';
import { BLUE_500, BLUE_300 } from '../../resources/colors';

const styles = {
    switchBase: props => ({
        color: props.buttoncolor ? props.buttoncolor : BLUE_500,
        '&$checked': {
            color: props.buttoncolor ? props.buttoncolor : BLUE_300,
            backgroundColor: props.trackcolor ? props.trackcolor : BLUE_300,
        },
        '&$checked + $track': {
            backgroundColor: props.trackcolor ? props.trackcolor : BLUE_300,
        },
    }),
    checked: {},
    track: props => ({
        backgroundColor: props.trackcolor ? props.trackcolor : BLUE_300,
    }),
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