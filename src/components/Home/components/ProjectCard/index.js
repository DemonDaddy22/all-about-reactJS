import React from 'react';

import classes from './styles.module.css';

export default class ProjectCard extends React.Component {

    handleClick = e => url => {
        e.preventDefault();
        window.open(url);
    }

    render = () => {
        const { title, image, projectPath, githubLink } = this.props;

        return <div className={classes.cardContainer} onClick={(e) => this.handleClick(e)(projectPath)}>
            <div className={classes.cardImage}
                style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={classes.cardContent}>
                <div className={classes.cardTitle}>{title}</div>
                <div className={classes.cardLink} onClick={(e) => this.handleClick(e)(githubLink)}>View on GitHub</div>
            </div>
        </div>;
    }
}