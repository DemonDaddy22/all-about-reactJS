import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import SkeletonWrapper from './components/SkeletonWrapper';
import { handleError } from '../../utils';
import { PLACEHOLDER_POSTS_API, RANDOM_AVATAR_API } from '../../resources/constants';

export default class SkeletonLoader extends React.Component {

    state = {
        loader: true,
        data: null
    }

    componentDidMount = () => {
        this.fetchPosts();
    };

    fetchPosts = () => this.setState({ loader: true }, () => fetch(PLACEHOLDER_POSTS_API)
        .then(handleError)
        .then(res => res.json())
        .then(data => this.setPosts(data))
        .catch(error => this.setState({
            loader: false, data: null, snack: {
                open: true,
                message: error.message,
                severity: 'error'
            }
        })));

    setPosts = data => {
        
    }

    // https://jsonplaceholder.typicode.com/posts
    // https://i.pravatar.cc/{size}
    // TODO - get posts and trim down the list size to 12

    render = () => {

        return <Page>
            <div className={classes.contentWrapper}>
                <SkeletonWrapper />
                <SkeletonWrapper />
                <SkeletonWrapper />
                <SkeletonWrapper />
                <SkeletonWrapper />
                <SkeletonWrapper />
                <SkeletonWrapper />
                <SkeletonWrapper />
            </div>
        </Page>;
    }
}