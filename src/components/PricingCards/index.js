import React from 'react';

import classes from './styles.module.css';
import Card from './components/Card';
import { themed } from '../../utils/theme';
import { GREEN_500, GREEN_300, INDIGO_300, INDIGO_500 } from '../../resources/colors';
import Page from '../../ui-components/Page';

export default class PricingCards extends React.Component {

    // invoked whenever theme changes in order to trigger themed function call
    updateComponent = (refresher = null) => refresher && this.setState({ refresher });

    render = () => <Page shouldComponentUpdate={this.updateComponent}>
        <div className={classes.pricingCardsContainer}>
            <div className={classes.cardsContainer}>
                <Card title={{ label: 'Basic', style: { backgroundColor: themed(INDIGO_500, INDIGO_300) } }} price={{ label: '$25', style: { color: themed(INDIGO_500, INDIGO_300) } }}
                    cardContainerClass={classes.cardMargin} features={{ features: ['Online access to resources', 'Limited quizzes & exercises', 'Mentors for doubt clearance'], style: { color: themed(INDIGO_500, INDIGO_300) } }}
                    buttonColor={themed(INDIGO_500, INDIGO_300)} />
                <Card title={{ label: 'Premium', style: { backgroundColor: themed(GREEN_500, GREEN_300) } }} subtitle={{ label: 'Most Popular', style: { color: themed(GREEN_500, GREEN_300) } }}
                    price={{ label: '$40', style: { color: themed(GREEN_500, GREEN_300) } }} cardContainerClass={`${classes.cardMargin} ${classes.centerCard}`} buttonColor={themed(GREEN_500, GREEN_300)}
                    features={{ features: ['Downloadable resources', '100+ quizzes & exercises', '1-on-1 mentor sessions'], style: { color: themed(GREEN_500, GREEN_300) } }} />
                <Card title={{ label: 'Ultimate', style: { backgroundColor: themed(INDIGO_500, INDIGO_300) } }} price={{ label: '$50', style: { color: themed(INDIGO_500, INDIGO_300) } }}
                    cardContainerClass={classes.cardMargin} features={{ features: ['Downloadable resources', 'All quizzes & exercises', '1-on-1 mentor sessions'], style: { color: themed(INDIGO_500, INDIGO_300) } }}
                    buttonColor={themed(INDIGO_500, INDIGO_300)} />
            </div>
        </div>
    </Page>;
}