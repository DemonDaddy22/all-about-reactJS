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

        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const passwordError = isEmptyString(value) || !re.test(value);
        const passwordErrorText = isEmptyString(value) ? 'Field cannot be empty' : !re.test(value) ? 'Password must be atleast 8 characters long, and should contain atleast 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character' : '';

        this.setState({ password: value, passwordError, passwordErrorText });
    }

    handleContactChange = e => {
        const value = e.target.value;

        const re = /^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$/;
        const contactError = isEmptyString(value) || !re.test(value);
        const contactErrorText = isEmptyString(value) ? 'Field cannot be empty' : !re.test(value) ? 'Enter a valid contact number' : '';

        this.setState({ contact: value, contactError, contactErrorText });
    }

    handleEmailChange = e => {
        const value = e.target.value;

        const re = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        const emailError = isEmptyString(value) || !re.test(value);
        const emailErrorText = isEmptyString(value) ? 'Field cannot be empty' : !re.test(value) ? 'Enter a valid email' : '';

        this.setState({ email: value, emailError, emailErrorText });
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
                        <Input autoComplete='off' id='fname' label='First name' onChange={this.handleFirstNameChange} className={classes.fname}
                            value={fname} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.fnameError} helperText={this.state?.fnameErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='lname' label='Last name' onChange={this.handleLastNameChange} className={classes.lname}
                            value={lname} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.lnameError} helperText={this.state?.lnameErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='username' label='Username' onChange={this.handleUsernameChange} className={classes.username}
                            value={username} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.usernameError} helperText={this.state?.usernameErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='password' type='password' label='Password' onChange={this.handlePasswordChange} className={classes.password}
                            value={password} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.passwordError} helperText={this.state?.passwordErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='contact' label='Contact Number' onChange={this.handleContactChange} className={classes.contact}
                            value={contact} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.contactError} helperText={this.state?.contactErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='email' label='Email' onChange={this.handleEmailChange} className={classes.email}
                            value={email} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.emailError} helperText={this.state?.emailErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        <Input autoComplete='off' id='address' label='Address' onChange={this.handleAddressChange} className={classes.address}
                            value={address} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={this.state.addressError} helperText={this.state?.addressErrorText} helpertextcolor={themed(RED_700, RED_500)} />
                        {/* create number input age, create a radio group component for gender selection */}
                    </div>
                </div>
            </div>
        </Page>;
    }
}