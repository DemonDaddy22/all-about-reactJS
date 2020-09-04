import React from 'react';

import MuiButton from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core';
import { TRANSPARENT, WHITE, WHITE_TRANSPARENT_70, THEME_COLOR } from '../../resources/colors';
import { getPathValue, isEmptyString } from '../../utils';

const styles = {
    root: props => ({
        borderColor: `${props.disabled ? TRANSPARENT : props.variant === 'outlined' ? props.borderColor : TRANSPARENT} !important`,
        backgroundColor: props.variant === 'outlined' ? TRANSPARENT : props.disabled ? '#aaa' : props.backgroundColor,
        '&:hover': {
            backgroundColor: props.disabled ? '#aaa' : props.variant === 'outlined' ? TRANSPARENT : props.backgroundColor,
            boxShadow: props.disabled || props.noShadow ? null : `0px 0px 8px ${props.backgroundColor}`,
        },
        '&:active': {
            boxShadow: props.disabled || props.noShadow ? null : `0px 0px 4px ${props.backgroundColor}`,
        },
        '& > .MuiButton-label': {
            color: props.variant === 'outlined' ? props.disabled ? 'rgba(0,0,0,.26)' : getPathValue(props, 'labelColor', 'var(--text-obscure)') : `${WHITE} !important`,
            padding: '0px 8px 0px 8px',
            fontWeight: 600,
            ...props.labelStyles,
        },
        '& > .MuiTouchRipple-root': {
            width: `calc(100% + ${props.variant === 'outlined' ? 2 : 0}px)`,
            height: `calc(100% + ${props.variant === 'outlined' ? 2 : 0}px)`,
            transform: `translate(${props.variant === 'outlined' ? '-1px, -1px' : '0px, 0px'})`,
            color: !isEmptyString(props.rippleColor) ? props.rippleColor : props.variant === 'outlined' ? 'var(--ripple)' : WHITE_TRANSPARENT_70,

            '& .MuiTouchRipple-rippleVisible': {
                animationDuration: '0.75s',
                animationTimingFunction: 'cubic-bezier(0,.84,.91,.86)',
            },

        },
        ...props.rootStyles,
    })
};

class Button extends React.Component {
    
    render = () => <MuiButton {...this.props} className={this.props.className} />;
}

Button.defaultProps = {
    backgroundColor: THEME_COLOR
};

export default withStyles(styles)(Button);