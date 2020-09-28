import React from 'react';

import classes from './styles.module.css';

export default class RepoCard extends React.Component {
    
    render = () => {
        const {name} = this.props;

        return <div className={classes.repoCard}>
            {name}
        </div>;
    }
}