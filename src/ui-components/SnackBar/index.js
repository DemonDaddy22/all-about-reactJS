import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { Slide } from '@material-ui/core';

class SnackBar extends React.Component {

    render = () => {
        const { open, hideDuration, vertical, horizontal, elevation, variant, severity, message, handleClose } = this.props;

        return <Snackbar open={open} autoHideDuration={hideDuration} onClose={handleClose} anchorOrigin={{
            vertical: vertical,
            horizontal: horizontal,
        }} TransitionComponent={Slide}>
            <MuiAlert elevation={elevation} variant={variant} onClose={handleClose} severity={severity}>
                {message}
            </MuiAlert>
        </Snackbar>;
    }
}

SnackBar.defaultProps = {
    hideDuration: 3000,
    vertical: 'bottom',
    horizontal: 'left',
    elevation: 5,
    variant: 'filled',
    severity: 'info'
}

export default SnackBar;