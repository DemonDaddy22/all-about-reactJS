import React from 'react';

import classes from './styles.module.css';
import todosDarkImage from '../../../../images/todos_dark.jpg';
import todosLightImage from '../../../../images/todos_light.jpg';
import { themed } from '../../../../utils/theme';

export default class ProjectCard extends React.Component {

    render = () => {

        return <div className={classes.cardContainer}>
            <div className={classes.cardImage}
                style={{ backgroundImage: `url(${themed(todosLightImage, todosDarkImage)}`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            <div className={classes.cardContent}>
                <div className={classes.cardTitle}>Project Card</div>
                <div className={classes.cardLink}>View on GitHub</div>
            </div>
        </div>;
    }
}