import React from 'react';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { THEME_COLOR } from '../../resources/colors';
import { withStyles } from '@material-ui/core';

const styles = {
    root: props => ({
        borderRadius: '50%',
        height: props.height ? props.height : 16,
        width: props.width ? props.width : 16,
        color: props.color ? props.color : THEME_COLOR,
        '&$checked': {
            color: props.color ? props.color : THEME_COLOR
        },
        ...props.boxStyles
    })
}

class CheckBox extends React.Component {

    render = () => {
        const { checked, disabled, label, labelProps } = this.props;

        return <FormControlLabel label={label} control={
            <Checkbox color='default' checked={checked} disabled={disabled} inputProps={{ 'aria-label': 'checkbox' }} {...this.props} />
        } {...labelProps}></FormControlLabel>
    }
}

export default withStyles(styles)(CheckBox);