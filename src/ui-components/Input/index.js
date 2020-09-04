import React from 'react';

import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core';

const styles = {
    root: props => ({
        '& .MuiOutlinedInput-input': {
            ...props.rootInputStyles
        },
        '& .MuiOutlinedInput-notchedOutline': {
            boxShadow: 'var(--shadow)',
            transition: 'border-color 0.25s ease-in-out'
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--text-obscure)',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--theme-color)',
        },
        '& .Mui-focused:before': {
            borderColor: 'var(--theme-color)',
        },
    })
};

class Input extends React.Component {

    render = () => {
        const { placeHolder, value, variant, style } = this.props;

        return <TextField fullWidth placeholder={placeHolder} value={value} variant={variant} style={style}
            {...this.props}></TextField>;
    }
}

export default withStyles(styles)(Input);