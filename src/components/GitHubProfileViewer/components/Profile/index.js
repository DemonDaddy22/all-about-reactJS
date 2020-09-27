import React from 'react';
import { GITHUB_API_BASE } from '../../../../resources/constants';
import { handleError } from '../../../../utils';

import classes from './styles.module.css';

export default class Profile extends React.Component {

    state = {
        profileData: null,
        loader: false
    }

    componentDidMount = () => this.props.searchUser && this.fetchUserData(this.props.username);

    componentDidUpdate = prevProps => {
        console.table(prevProps);
        console.log('--------------------------------------------------');
        console.table(this.props);
        if (prevProps.searchUser !== this.props.searchUser && this.props.searchUser) this.fetchUserData(this.props.username);
    }

    fetchUserData = username => this.setState({ loader: true }, () => fetch(GITHUB_API_BASE + `/users/${username}`)
        .then(handleError)
        .then(res => res.json())
        .then(data => this.setState({ loader: false, profileData: data }, () => {
            console.table(data);
            this.props.clearUsername();
        }))
        .catch(error => this.setState({ loader: false, profileData: null }, () => console.log(error))));

    render = () => {

        return <div className={classes.profileContainer}>
            {this.state.loader ?
                <div className={classes.loader}>Loading...</div>
                : !this.state.profileData ?
                    <div className={classes.noData}>Try searching for a valid user</div>
                    : <div className={classes.profileContent}>{this.state.profileData.login}</div>}
        </div>;
    }
}