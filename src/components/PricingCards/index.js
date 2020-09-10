import React from 'react';

import classes from './styles.module.css';
import Card from './components/Card';
import Switch from '../../ui-components/Switch';
import { themes, setTheme, themed, getTheme } from './theme';
import Label from '../../ui-components/Label';
import Iconbutton from '../../ui-components/Button/Iconbutton';
import Brightness4RoundedIcon from '@material-ui/icons/Brightness4Rounded';
import Brightness7RoundedIcon from '@material-ui/icons/Brightness7Rounded';
import { GREY_50 } from '../../resources/colors';

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
            <Card title={'Premium'} price={'$10'} cardContainerClass={classes.cardMargin}
                features={['200+ detailed resources', '100+ carefully designed exercises', '1-on-1 on-demand mentor sessions']} />
            <Card title={'Premium'} price={'$10'} cardContainerClass={`${classes.cardMargin} ${classes.centerCard}`}
                features={['200+ detailed resources', '100+ carefully designed exercises', '1-on-1 on-demand mentor sessions']} />
            <Card title={'Premium'} price={'$10'} cardContainerClass={classes.cardMargin}
                features={['200+ detailed resources', '100+ carefully designed exercises', '1-on-1 on-demand mentor sessions']} />
        </div>
    </>;
}