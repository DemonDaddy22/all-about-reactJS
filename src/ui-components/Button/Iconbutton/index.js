import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { THEME_COLOR } from '../../../resources/colors';
import { withStyles } from '@material-ui/core';

const styles = {
    root: props => ({
        color: props.iconColor ? props.iconColor : THEME_COLOR,
        ...props.iconStyles,
        '&:hover': {
            color: props.iconhovercolor ? props.iconhovercolor : THEME_COLOR
        }
    })
}

class Iconbutton extends React.Component {

    render = () => <IconButton aria-label='icon-btn' color='default' disabled={this.props.disabled} {...this.props}>
        {this.props.icon}
    </IconButton>;
}

export default withStyles(styles)(Iconbutton);