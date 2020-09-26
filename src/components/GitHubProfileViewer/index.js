import React from 'react';
import { GITHUB_API_BASE } from '../../resources/constants';
import Page from '../../ui-components/Page';

import classes from './styles.module.css';

export default class GitHubProfileViewer extends React.Component {

    componentDidMount = () => {
        const user = 'DemonDaddy22';
        this.fetchUserData(user);
        this.fetchReposData(user);
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

    render = () => {

        return <Page>
            <div className={classes.viewerContainer}>
                GitHub Profile Viewer
            </div>
        </Page>;
    }
}