import React from 'react';

import classes from './styles.module.css';
import Card from './components/Card';
import { themes, setTheme, getTheme, themed } from './theme';
import Iconbutton from '../../ui-components/Button/Iconbutton';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';
import { GREY_50, GREEN_500, GREEN_300, INDIGO_300, INDIGO_500 } from '../../resources/colors';

// use var and themed for colors for future implementation of theme on all the projects
export default class PricingCards extends React.Component {

    state = {
        theme: false,
        primaryColor: themed(INDIGO_500, INDIGO_300),
        secondaryColor: themed(GREEN_500, GREEN_300)
    }

    componentDidMount = () => this.loadTheme();

    loadTheme = () => {
        const currTheme = getTheme();
        this.setState({ theme: currTheme === themes.LIGHT ? false : true, primaryColor: themed(INDIGO_500, INDIGO_300), secondaryColor: themed(GREEN_500, GREEN_300) },
            () => setTheme(currTheme));
    }

    handleThemeChange = () => this.setState({ theme: !this.state.theme },
        () => {
            setTheme(this.state.theme ? themes.DARK : themes.LIGHT);
            this.setState({ primaryColor: themed(INDIGO_500, INDIGO_300), secondaryColor: themed(GREEN_500, GREEN_300) });
            // window.location.reload();
        });

    render = () => <>
        <div className={classes.switchWrapper}>
            <Iconbutton iconColor={GREY_50} onClick={this.handleThemeChange} icon={this.state.theme ? <Brightness7RoundedIcon fontSize='large' /> : <Brightness4RoundedIcon fontSize='large' />}></Iconbutton>
        </div>
        <div className={classes.cardsContainer}>
            <Card title={{ label: 'Basic', style: { backgroundColor: this.state.primaryColor } }} price={{ label: '$25', style: { color: this.state.primaryColor } }}
                cardContainerClass={classes.cardMargin} features={{ features: ['Online access to resources', 'Limited quizzes & exercises', 'Mentors for doubt clearance'], style: { color: this.state.primaryColor } }}
                buttonColor={this.state.primaryColor} />
            <Card title={{ label: 'Premium', style: { backgroundColor: this.state.secondaryColor } }} subtitle={{ label: 'Most Popular', style: { color: this.state.secondaryColor } }}
                price={{ label: '$40', style: { color: this.state.secondaryColor } }} cardContainerClass={`${classes.cardMargin} ${classes.centerCard}`} buttonColor={this.state.secondaryColor}
                features={{ features: ['Downloadable resources', '100+ quizzes & exercises', '1-on-1 mentor sessions'], style: { color: this.state.secondaryColor } }} />
            <Card title={{ label: 'Ultimate', style: { backgroundColor: this.state.primaryColor } }} price={{ label: '$50', style: { color: this.state.primaryColor } }}
                cardContainerClass={classes.cardMargin} features={{ features: ['Downloadable resources', 'All quizzes & exercises', '1-on-1 mentor sessions'], style: { color: this.state.primaryColor } }}
                buttonColor={this.state.primaryColor} />
        </div>
    </>;
}