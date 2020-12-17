import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import SkeletonWrapper from './components/SkeletonWrapper';
import { handleError, isEmptyList } from '../../utils';
import { PLACEHOLDER_POSTS_API, RANDOM_AVATAR_API } from '../../resources/constants';
import Post from './components/Post';
import SnackBar from '../../ui-components/SnackBar';

const DATA_SET_SIZE = 12; // must be less than 30
export default class SkeletonLoader extends React.Component {

    state = {
        loader: true,
        data: null
    }

    componentDidMount = () => {
        setTimeout(this.fetchPosts, 2000);
    };

    fetchPosts = () => this.setState({ loader: true }, () => fetch(PLACEHOLDER_POSTS_API)
        .then(handleError)
        .then(res => res.json())
        .then(data => this.setPosts(isEmptyList(data) ? [] : data.slice(0, DATA_SET_SIZE)))
        .catch(error => this.setState({
            loader: false, data: null, snack: {
                open: true,
                message: error.message,
                severity: 'error'
            }
        })));

    fetchAvatars = async () => {
        try {
            const res = await fetch(`${RANDOM_AVATAR_API}?limit=${DATA_SET_SIZE}`, {
                method: 'GET',
                headers: {
                    'X-API-KEY': 'D971CE3E-28144F59-9149581A-BA42ED96',
                    'Accept': 'application/json',
                    'Cache-Control': 'no-cache'
                }
            });
            const data = await res.json();
            return data;
        } catch (e) {
            return null;
        }
    }

    setPosts = async data => {
        try {
            const avatars = await this.fetchAvatars();
            const posts = isEmptyList(data) ? [] : data.map((post, index) => ({ ...post, name: index < avatars.length ? avatars[index]['name'] : '', avatar: index < avatars.length ? avatars[index]['photo'] : '' }))
            this.setState({ loader: false, data: posts });
        } catch (e) {
            this.setState({
                loader: false, data, snack: {
                    open: true,
                    message: e.message,
                    severity: 'error'
                }
            })
        }
    }

    handleSnackClose = () => this.setState({ snack: { ...this.state.snack, open: false } });

    render = () => {
        const { data, loader, snack } = this.state;

        return <Page>
            {loader ? <div className={classes.contentWrapper}>
                {new Array(DATA_SET_SIZE).fill(null).map((_, index) => <SkeletonWrapper key={`skeleton-${index}`} />)}
            </div> : <div className={classes.postsWrapper}>
                    {!isEmptyList(data) && data.map(post => <Post key={post.id} name={post.name} avatar={post.avatar} title={post.title} body={post.body} />)}
                </div>}
            {snack?.message && <SnackBar message={snack.message} severity={snack.severity} handleClose={this.handleSnackClose} open={snack.open} />}
        </Page>;
    }
}