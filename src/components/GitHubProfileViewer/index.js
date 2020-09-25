import React from 'react';
import Page from '../../ui-components/Page';

import classes from './styles.module.css';

export default class GitHubProfileViewer extends React.Component {

    render = () => {

        return <Page>
            <div className={classes.viewerContainer}>
                GitHub Profile Viewer
            </div>
        </Page>;
    }
}