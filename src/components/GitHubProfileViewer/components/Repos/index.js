import React from 'react';
import { GITHUB_API_BASE } from '../../../../resources/constants';
import SnackBar from '../../../../ui-components/SnackBar';
import SpinnerLoader from '../../../../ui-components/SpinnerLoader';
import { handleError, isEmptyList } from '../../../../utils';
import RepoCard from '../RepoCard';

import classes from './styles.module.css';

export default class Repos extends React.Component {

    state = {
        reposData: null,
        loader: false,
        snack: null
    }

    componentDidMount = () => this.props.searchUser && this.fetchReposData(this.props.username);

    componentDidUpdate = prevProps => {
        if (prevProps.searchUser !== this.props.searchUser && this.props.searchUser) this.fetchReposData(this.props.username);
    }

    // show error in snackbar
    fetchReposData = username => this.setState({ loader: true }, () => fetch(GITHUB_API_BASE + `/users/${username}/repos?sort=pushed`)
        .then(handleError)
        .then(res => res.json())
        .then(data => this.setState({ loader: false, reposData: data, snack: null }, () => this.props.clearUsername()))
        .catch(error => this.setState({
            loader: false, reposData: null, snack: {
                open: true,
                message: error.message,
                severity: 'error'
            }
        }, () => this.props.clearUsername(username))));

    handleSnackClose = () => this.setState({ snack: { ...this.state.snack, open: false } });

    render = () => {
        const reposData = this.state.reposData;

        return <>
            {this.state.loader ?
                <div className={classes.loader}><SpinnerLoader /></div>
                : isEmptyList(reposData) ?
                    <div className={classes.noData}>No repos data available</div>
                    : <div className={classes.reposGrid}>
                        {reposData.map((repo, index) => <RepoCard key={`repo-${index}`} repo={repo} />)}
                    </div>}
            {this.state?.snack?.message && <SnackBar message={this.state.snack.message} severity={this.state.snack.severity} handleClose={this.handleSnackClose} open={this.state.snack.open} />}
        </>;
    }
}