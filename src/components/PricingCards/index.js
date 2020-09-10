import React from 'react';

import classes from './styles.module.css';
import Card from './components/Card';
import { themes, setTheme, getTheme, themed } from './theme';
import Iconbutton from '../../ui-components/Button/Iconbutton';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';
import { GREY_50, GREEN_500, GREEN_300, INDIGO_300, INDIGO_500 } from '../../resources/colors';

// update styles of pricing card
// use var and themed for colors for future implementation of theme on all the projects
export default class PricingCards extends React.Component {

    state = {
        theme: false
    }

    componentDidMount = () => this.loadTheme();

    loadTheme = () => {
        const currTheme = getTheme();
        this.setState({ theme: currTheme === themes.LIGHT ? false : true }, () => setTheme(currTheme));
    }

    handleThemeChange = () => this.setState({ theme: !this.state.theme },
        () => {
            setTheme(this.state.theme ? themes.DARK : themes.LIGHT);
            // window.location.reload();
        });

    render = () => <>
        <div className={classes.switchWrapper}>
            <Iconbutton iconColor={GREY_50} onClick={this.handleThemeChange} icon={this.state.theme ? <Brightness7RoundedIcon fontSize='large' /> : <Brightness4RoundedIcon fontSize='large' />}></Iconbutton>
        </div>
        <div className={classes.cardsContainer}>
            <Card title={{ label: 'Basic', style: { backgroundColor: themed(INDIGO_300, INDIGO_500) } }} price={{ label: '$25', style: { color: themed(INDIGO_300, INDIGO_500) } }}
                cardContainerClass={classes.cardMargin} features={{ features: ['Online access to resources', 'Limited quizzes & exercises', 'Mentors for doubt clearance'], style: { color: themed(INDIGO_300, INDIGO_500) } }}
                buttonColor={themed(INDIGO_300, INDIGO_500)} />
            <Card title={{ label: 'Premium', style: { backgroundColor: themed(GREEN_300, GREEN_500) } }} subtitle={{ label: 'Most Popular', style: { color: themed(GREEN_300, GREEN_500) } }}
                price={{ label: '$40', style: { color: themed(GREEN_300, GREEN_500) } }} cardContainerClass={`${classes.cardMargin} ${classes.centerCard}`} buttonColor={themed(GREEN_300, GREEN_500)}
                features={{ features: ['Downloadable resources', '100+ quizzes & exercises', '1-on-1 mentor sessions'], style: { color: themed(GREEN_300, GREEN_500) } }} />
            <Card title={{ label: 'Ultimate', style: { backgroundColor: themed(INDIGO_300, INDIGO_500) } }} price={{ label: '$50', style: { color: themed(INDIGO_300, INDIGO_500) } }}
                cardContainerClass={classes.cardMargin} features={{ features: ['Downloadable resources', 'All quizzes & exercises', '1-on-1 mentor sessions'], style: { color: themed(INDIGO_300, INDIGO_500) } }}
                buttonColor={themed(INDIGO_300, INDIGO_500)} />
        </div>
    </>;
}