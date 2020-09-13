import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import GitHubIcon from '@material-ui/icons/GitHub';

const GITHUB_BASE = 'https://github.com/DemonDaddy22';
export default class Home extends React.Component {

    handleGithubButtonClick = path => window.open(GITHUB_BASE + path);

    render = () => <Page>
        <div className={classes.homeContainer}>
            <div className={classes.headerWrapper}>
                <div className={classes.header}>
                    <span className={classes.headerText}>All about React<div className={classes.underline}></div></span><span className={classes.headerHighlight}>JS</span>
                </div>
                <div className={classes.githubLinks}>
                    <div className={classes.linkButton} onClick={() => this.handleGithubButtonClick('/45DaysOfReactJS')}>
                        <StarBorderRoundedIcon fontSize='default' style={{ marginTop: -2 }} />
                        <span className={classes.buttonLabel}>Star</span>
                    </div>
                    <div style={{ marginLeft: 8 }} className={classes.linkButton} onClick={() => this.handleGithubButtonClick('/')}>
                        <GitHubIcon fontSize='small' style={{ marginTop: -2 }} />
                        <span style={{ marginLeft: 6 }} className={classes.buttonLabel}>Follow</span>
                    </div>
                </div>
            </div>
        </div>
    </Page>;
}