import React from 'react';

import classes from './styles.module.css';
import { GITHUB_API_BASE } from '../../../../resources/constants';
import { handleError, isEmptyObject, isEmptyString } from '../../../../utils';
import LocationCityRoundedIcon from '@material-ui/icons/LocationCityRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import LinkRoundedIcon from '@material-ui/icons/LinkRounded';
import TwitterIcon from '@material-ui/icons/Twitter';
import SpinnerLoader from '../../../../ui-components/SpinnerLoader';
import SnackBar from '../../../../ui-components/SnackBar';

export default class Profile extends React.Component {

    state = {
        profileData: null,
        loader: false
    }

    componentDidMount = () => this.props.searchUser && this.fetchUserData(this.props.username);

    componentDidUpdate = prevProps => {
        if (prevProps.searchUser !== this.props.searchUser && this.props.searchUser) this.fetchUserData(this.props.username);
    }

    fetchUserData = username => this.setState({ loader: true }, () => fetch(GITHUB_API_BASE + `/users/${username}`)
        .then(handleError)
        .then(res => res.json())
        .then(data => this.setState({ loader: false, profileData: data, snack: null }, () => this.props.clearUsername()))
        .catch(error => this.setState({
            loader: false, profileData: null, snack: {
                open: true,
                message: error.message,
                severity: 'error'
            }
        }, () => this.props.clearUsername(this.props.username))));

    handleSnackClose = () => this.setState({ snack: { ...this.state.snack, open: false } });

    handleLinkClick = url => {
        if (isEmptyString(url)) return;
        window.open(url);
    }

    render = () => {
        const profileData = this.state.profileData;
        // add necessary links
        return <>
            {this.state.loader ?
                <div className={classes.loader}><SpinnerLoader /></div>
                : isEmptyObject(profileData) ?
                    <div className={classes.noData}>Try searching for a valid user</div>
                    : <>
                        <img className={classes.profilePic} src={profileData.avatar_url} alt='profile-pic' />
                        <div className={`${classes.name} ${profileData?.html_url && classes.nameActive}`}
                            onClick={() => profileData?.html_url ? this.handleLinkClick(profileData.html_url) : {}}>
                            {profileData.name}
                        </div>
                        <div className={classes.username}>{profileData.login}</div>
                        <div className={classes.bio}>{profileData.bio}</div>
                        <div className={classes.stats}>
                            <div className={classes.followers}>
                                <span className={classes.stat}>{profileData.followers}</span>
                                followers
                            </div>
                            <div className={classes.following}>
                                <span className={classes.stat}>{profileData.following}</span>
                                following
                            </div>
                        </div>
                        {profileData?.company && <div className={classes.company}>
                            <LocationCityRoundedIcon style={{ fontSize: '1.25rem', marginRight: 6, color: 'var(--text-obscurer)' }} />
                            {profileData.company}
                        </div>}
                        {profileData?.location && <div className={classes.location}>
                            <LocationOnRoundedIcon style={{ fontSize: '1.25rem', marginRight: 6, color: 'var(--text-obscurer)' }} />
                            {profileData.location}
                        </div>}
                        {profileData?.blog && <div className={`${classes.blog} ${profileData?.blog && classes.blogActive}`}
                            onClick={() => profileData?.blog ? this.handleLinkClick(`https://${profileData.blog}`) : {}}>
                            <LinkRoundedIcon style={{ fontSize: '1.25rem', marginRight: 6, color: 'var(--text-obscurer)' }} />
                            {profileData.blog}
                        </div>}
                        {profileData?.twitter_username && <div className={classes.twitter}>
                            <TwitterIcon style={{ fontSize: '1.25rem', marginRight: 6, color: 'var(--text-obscurer)' }} />
                            @{profileData.twitter_username}
                        </div>}
                    </>}
            {this.state?.snack?.message && <SnackBar message={this.state.snack.message} severity={this.state.snack.severity} handleClose={this.handleSnackClose} open={this.state.snack.open} />}
        </>;
    }
}