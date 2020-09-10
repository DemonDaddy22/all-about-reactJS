import React from 'react';
import classes from './styles.module.css';
import Button from '../../../../ui-components/Button';
import { isEmptyString } from '../../../../utils';
import { THEME_COLOR, THEME_COLOR_DARK } from '../../../../resources/colors';
import { themed } from '../../theme';

export default class Card extends React.Component {

    render = () => {
        const { cardContainerClass, title = {}, subtitle = {}, price = {}, features = {}, buttonColor = themed(THEME_COLOR, THEME_COLOR_DARK) } = this.props;

        return <div className={`${cardContainerClass} ${classes.card}`}>
            <div style={title.style} className={classes.cardTitle}>{title.label}</div>
            <div style={subtitle.style} className={classes.cardSubtitle}>{!isEmptyString(subtitle.label) ? subtitle.label : ''}</div>
            <div className={classes.cardHero}>
                <div style={price.style} className={classes.cardPrice}>{price.label}</div>
                <div className={classes.cardPriceDuration}>per month</div>
            </div>
            <div style={features.style} className={classes.cardFeaturesWrapper}>
                {features.features.map((feature, index) => <div key={`feature-${index}`} className={classes.cardFeature}>- {feature}</div>)}
            </div>
            <div className={classes.cardButtonWrapper}>
                <Button className={classes.cardButton} backgroundColor={buttonColor} onClick={this.handleAddTodo} labelStyles={{ display: 'inline-flex', padding: 0 }}>Buy Now</Button>
            </div>
        </div>
    }
}