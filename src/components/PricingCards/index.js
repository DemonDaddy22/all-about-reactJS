import React from 'react';

import classes from './styles.module.css';
import Card from './components/Card';

const themes = Object.freeze({
    LIGHT: 'light',
    DARK: 'dark'
});

export default class PricingCards extends React.Component {

    state = {
        theme: themes.LIGHT
    }

    render = () => {
        return <div className={classes.cardsContainer}>
            <Card cardContainerClass={classes.cardMargin} />
            <Card cardContainerClass={classes.cardMargin} />
            <Card cardContainerClass={classes.cardMargin} />
        </div>
    }
}