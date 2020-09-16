import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import GitHubIcon from '@material-ui/icons/GitHub';
import ProjectCard from './components/ProjectCard';
import { projects } from './projects';
import { GITHUB_BASE } from '../../resources/constants';
import { themed } from '../../utils/theme';
export default class Home extends React.Component {

    // invoked whenever theme changes in order to trigger themed function call
    updateComponent = (refresher = null) => refresher && this.setState({ refresher });

    handleGithubButtonClick = path => window.open(GITHUB_BASE + path);

    render = () => <Page shouldComponentUpdate={this.updateComponent}>
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
            <div className={classes.projectsContainer}>
                {projects.map(project => <ProjectCard key={`project-${project.sequence}`} title={project.title}
                    image={themed(project.imageLight, project.imageDark)} projectPath={project.projectPath} githubLink={project.githubLink} />)}
            </div>
        </div>
    </Page>;
}