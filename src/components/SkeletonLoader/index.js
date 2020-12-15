import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import SkeletonWrapper from './components/SkeletonWrapper';

export default class SkeletonLoader extends React.Component {

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