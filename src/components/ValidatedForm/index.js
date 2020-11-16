import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import Input from '../../ui-components/Input';
import { isEmptyString } from '../../utils';
import { themed } from '../../utils/theme';
import { RED_500, RED_700 } from '../../resources/colors';

export default class ValidatedForm extends React.Component {

    state = {
        fname: '',
        lname: '',
        username: '',
        password: '',
        contact: '',
        email: '',
        address: ''
    }

    updateComponent = (refresher = null) => refresher && this.setState({ refresher });

    handleFirstNameChange = e => {
        const value = e.target.value;
        this.setState({ fname: value, fnameError: isEmptyString(value), fnameErrorText: isEmptyString(value) ? 'Field cannot be empty' : '' });
    }

    handleLastNameChange = e => {
        const value = e.target.value;
        this.setState({ lname: value, lnameError: isEmptyString(value), lnameErrorText: isEmptyString(value) ? 'Field cannot be empty' : '' });
    }

    handleUsernameChange = e => {
        const value = e.target.value;
        this.setState({ username: value, usernameError: isEmptyString(value), usernameErrorText: isEmptyString(value) ? 'Field cannot be empty' : '' });
    }

    handlePasswordChange = e => {
        const value = e.target.value;
        this.setState({ password: value, passwordError: isEmptyString(value), passwordErrorText: isEmptyString(value) ? 'Field cannot be empty' : '' });
    }

    handleContactChange = e => {
        const value = e.target.value;
        this.setState({ contact: value, contactError: isEmptyString(value), contactErrorText: isEmptyString(value) ? 'Field cannot be empty' : '' });
    }

    handleEmailChange = e => {
        const value = e.target.value;
        this.setState({ email: value, emailError: isEmptyString(value), emailErrorText: isEmptyString(value) ? 'Field cannot be empty' : '' });
    }

    handleAddressChange = e => {
        const value = e.target.value;
        this.setState({ address: value, addressError: isEmptyString(value), addressErrorText: isEmptyString(value) ? 'Field cannot be empty' : '' });
    }

    render = () => {
        const { fname, lname, username, password, contact, email, address } = this.state;

        return <Page shouldComponentUpdate={this.updateComponent}>
            <div className={classes.formWrapper}>
                <div className={classes.formContainer}>
                    <div className={classes.heading}>Register Here</div>
                    <div className={classes.info}>This is just a template form, none of the information you fill, will be stored anywhere.</div>
                    <div className={classes.formComponents}>
                        <Input autoComplete='off' id='fname' label='First name' onChange={this.handleFirstNameChange}
                            value={fname} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.fnameError} helperText={this.state?.fnameErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='lname' label='Last name' onChange={this.handleLastNameChange}
                            value={lname} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.lnameError} helperText={this.state?.lnameErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='username' label='Username' onChange={this.handleUsernameChange}
                            value={username} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.usernameError} helperText={this.state?.usernameErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='password' type='password' label='Password' onChange={this.handlePasswordChange}
                            value={password} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.passwordError} helperText={this.state?.passwordErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='contact' label='Contact Number' onChange={this.handleContactChange}
                            value={contact} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.contactError} helperText={this.state?.contactErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='email' label='Email' onChange={this.handleEmailChange}
                            value={email} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.emailError} helperText={this.state?.emailErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='address' label='Address' onChange={this.handleAddressChange}
                            value={address} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.addressError} helperText={this.state?.addressErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        {/* create number input age, create a radio group component for gender selection */}
                    </div>
                </div>
            </div>
        </Page>;
    }
}