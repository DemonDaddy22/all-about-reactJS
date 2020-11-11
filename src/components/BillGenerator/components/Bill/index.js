import React from 'react';
import { getPathValue, isEmptyObject } from '../../../../utils';

import classes from './styles.module.css';

export default class Bill extends React.Component {

    state = {
        isCartEmpty: true
    }

    componentDidMount = () => this.setCartStatus(this.props.tacos, this.props.sides);

    componentDidUpdate = prevProps => {
        const prevCount = this.getCount(prevProps?.tacos) + this.getCount(prevProps?.sides);
        const count = this.getCount(this.props?.tacos) + this.getCount(this.props?.sides);
        if (prevCount !== count) this.setCartStatus(this.props.tacos, this.props.sides);
    }

    getCount = items => isEmptyObject(items) ? 0 : Object.keys(items).reduce((total, item) => total += getPathValue(item, 'count', 0), 0);

    setCartStatus = (tacos, sides) => {
        let isCartEmpty = isEmptyObject(tacos) || isEmptyObject(sides);
        const tacosPresent = !isEmptyObject(tacos) && Object.keys(tacos).some(taco => getPathValue(tacos[taco], 'count', 0) > 0);
        const sidesPresent = !isEmptyObject(sides) && Object.keys(sides).some(side => getPathValue(sides[side], 'count', 0) > 0);
        isCartEmpty = isCartEmpty || (!tacosPresent || !sidesPresent);
        this.setState({ isCartEmpty });
    }

    render = () => {
        const { tacos, sides, addOns } = this.props;

        return <>
            <div className={classes.title}>Order Summary</div>
            {this.state.isCartEmpty ? <div className={classes.noData}>You haven't selected any items yet :(</div> :
                <>
                    <div className={classes.billContainer}>
                        {!isEmptyObject(tacos) && Object.keys(tacos).map((taco, index) => <div key={`cart-taco-${index}`} className={classes.cartItemWrapper}>
                            <div className={classes.item}>{getPathValue(tacos[taco], 'name', '')}</div>
                            <div className={classes.quantity}>({getPathValue(tacos[taco], 'count', 0)})</div>
                            <div className={classes.price}>${getPathValue(tacos[taco], 'count', 0) * getPathValue(tacos[taco], 'price', 0)}</div>
                        </div>)}
                    </div>
                </>
            }
        </>;
    }
};