import React from 'react';

import TextField from '@material-ui/core/TextField'


export default class Input extends React.Component {

    render = () => {
        const { placeHolder, value, variant, style } = this.props;

        return <TextField placeholder={placeHolder} value={value} variant={variant} style={style}
            {...this.props}></TextField>;
    }
}

Input.defaultProps = {
    variant: 'outlined'
}