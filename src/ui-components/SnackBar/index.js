import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

class SnackBar extends React.Component {

    render = () => <Snackbar open={this.props.open} autoHideDuration={6000} onClose={this.props.handleClose}>
        <MuiAlert elevation={5} variant='filled' onClose={this.props.handleClose} severity='success'>
            This is a success message!
        </MuiAlert>
    </Snackbar>;
}

export default SnackBar;