import React from 'react';
import { GITHUB_API_BASE } from '../../resources/constants';
import Button from '../../ui-components/Button';
import Iconbutton from '../../ui-components/Button/Iconbutton';
import Input from '../../ui-components/Input';
import Page from '../../ui-components/Page';

import classes from './styles.module.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import { isEmptyString } from '../../utils';

export default class GitHubProfileViewer extends React.Component {

    state = {
        username: '',
        searchUser: false,
        snack: null
    }

    componentDidMount = () => {
        const user = 'DemonDaddy22';
        this.fetchUserData(user);
        this.fetchReposData(user);
        window.addEventListener('keydown', this.handleKeyDown);
    }

    fetchUserData = user => {
        fetch(GITHUB_API_BASE + `/users/${user}`)
            .then(res => res.json())
            .then(data => console.table(data));
    }

    fetchReposData = user => {
        fetch(GITHUB_API_BASE + `/users/${user}/repos`)
            .then(res => res.json())
            .then(data => console.log(data));
    }

    handleKeyDown = e => e.key === 'Enter' && this.handleSearchUser();

    handleValueChange = e => this.setState({ username: e.target.value });

    handleSearchUser = () => {
        if (isEmptyString(this.state.username)) {
            this.setState({ snack: {
                open: true,
                message: `Uh-oh! I don't like empty strings`,
                severity: 'warning'
            } });
        } else {
            this.setState({ searchUser: true });
        }
    }

    clearUsername = () => {
        this.setState({ username: '' });
        document.querySelector('#search-user').focus();
    }

    render = () => {

        return <Page>
            <div className={classes.viewerContainer}>
                <div className={classes.searchInputContainer}>
                    <div className={classes.searchWrapper}>
                        <Input id='search-user' label='Search User' onChange={this.handleValueChange} value={this.state.username} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }} />
                        <Button className={classes.desktopBtn} onClick={this.handleSearchUser} labelStyles={{ display: 'inline-flex', padding: 0 }} endIcon={<GitHubIcon style={{ marginLeft: 4 }} />}>Find Me</Button>
                        <Iconbutton className={classes.mobileBtn} onClick={this.handleSearchUser} icon={<GitHubIcon fontSize='large' />}></Iconbutton>
                    </div>
                </div>
            </div>
        </Page>;
    }
}