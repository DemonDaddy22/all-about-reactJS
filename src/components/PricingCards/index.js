import React from 'react';

import classes from './styles.module.css';
import Card from './components/Card';
import Switch from '../../ui-components/Switch';
import { themes, setTheme, themed, getTheme } from './theme';
import Label from '../../ui-components/Label';

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
            window.location.reload();
        });

    render = () => <>
        <div className={classes.switchWrapper}>
            <Label className={classes.switchLabel} label='Theme'></Label>
            <Switch checked={this.state.theme} handleChange={this.handleThemeChange} buttoncolor={themed('#212121', '#f0f0f0')}
                trackcolor={themed('#373737', '#ffffff')} />
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