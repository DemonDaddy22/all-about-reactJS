import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import Input from '../../ui-components/Input';

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

    handleValueChange = (e, key) => {
        const value = e.target.value;
        this.setState({ [key]: value });
    }

    render = () => {
        const { fname, lname, username, password, contact, email, address } = this.state;

        return <Page>
            <div className={classes.formWrapper}>
                <div className={classes.formContainer}>
                    <div className={classes.heading}>Register Here</div>
                    <div className={classes.info}>This is just a template form, none of the information you fill, will be stored anywhere.</div>
                    <div className={classes.formComponents}>
                        <Input autoComplete='off' id='fname' label='First name' onChange={e => this.handleValueChange(e, 'fname')} value={fname} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} />
                        <Input autoComplete='off' id='lname' label='Last name' onChange={e => this.handleValueChange(e, 'lname')} value={lname} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} />
                        <Input autoComplete='off' id='username' label='Username' onChange={e => this.handleValueChange(e, 'username')} value={username} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} />
                        <Input autoComplete='off' id='password' type='password' label='Password' onChange={e => this.handleValueChange(e, 'password')} value={password} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} />
                        <Input autoComplete='off' id='contact' label='Contact Number' onChange={e => this.handleValueChange(e, 'contact')} value={contact} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} />
                        <Input autoComplete='off' id='email' label='Email' onChange={e => this.handleValueChange(e, 'email')} value={email} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} />
                        <Input autoComplete='off' id='address' label='Address' onChange={e => this.handleValueChange(e, 'address')} value={address} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} />
                        {/* create number input age, create a radio group component for gender selection */}
                    </div>
                </div>
            </div>
        </Page>;
    }
}