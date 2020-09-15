import React from 'react';

import classes from './styles.module.css';

export default class ProjectCard extends React.Component {

    render = () => {

        return <div className={classes.cardContainer}>
            <img src="https://images.unsplash.com/photo-1600166752784-23abdf9aa92c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
                alt="project-card" className={classes.cardImage}></img>
            <div className={classes.cardContent}>
                <div className={classes.cardTitle}>Project Card</div>
                <div className={classes.cardLink}>View on GitHub</div>
            </div>
        </div>;
    }
}