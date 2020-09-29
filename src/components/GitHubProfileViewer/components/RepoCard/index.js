import React from 'react';

import classes from './styles.module.css';
import { getPathValue } from '../../../../utils';
import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';

export default class RepoCard extends React.Component {

    render = () => {
        const repo = this.props.repo;

        return <div className={classes.repoCard}>
            {repo?.name && <div className={classes.repoName}>
                <SubjectRoundedIcon color='inherit' className={classes.repoIcon} />
                {repo.name}
            </div>}
            <div className={classes.repoDescription}>{repo?.description}</div>
            <div className={classes.bottomContent}>
                {repo?.language && <div className={classes.repoLanguage}>{repo.language}</div>}
                {getPathValue(repo, 'stargazers_count', 0) > 0 && <div className={classes.repoStars}>
                    <StarBorderRoundedIcon color='inherit' className={classes.repoIcon} style={{ marginTop: -2, marginRight: 4 }} />
                    {repo.stargazers_count}
                </div>}
                {getPathValue(repo, 'forks_count', 0) > 0 && <div className={classes.repoForks}>
                    <AccountTreeRoundedIcon color='inherit' className={classes.repoIcon} style={{ marginRight: 4 }} />
                    {repo.forks_count}
                </div>}
            </div>
        </div>;
    }
}