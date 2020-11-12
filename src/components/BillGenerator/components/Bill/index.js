import React from 'react';
import { getPathValue, isEmptyObject } from '../../../../utils';

import classes from './styles.module.css';

export default class Bill extends React.Component {

    state = {
        isCartEmpty: true
    }

    componentDidMount = () => this.setCartStatus(this.props.tacos, this.props.sides);

    componentDidUpdate = prevProps => {
        const prevCount = this.getCount(prevProps.tacos) + this.getCount(prevProps.sides);
        const count = this.getCount(this.props.tacos) + this.getCount(this.props.sides);
        if (prevCount !== count) this.setCartStatus(this.props.tacos, this.props.sides);
    }

    setCartStatus = (tacos, sides) => {
        let isCartEmpty = isEmptyObject(tacos) || isEmptyObject(sides);
        const tacosPresent = !isEmptyObject(tacos) && Object.keys(tacos).some(taco => getPathValue(tacos[taco], 'count', 0) > 0);
        const sidesPresent = !isEmptyObject(sides) && Object.keys(sides).some(side => getPathValue(sides[side], 'count', 0) > 0);
        isCartEmpty = isCartEmpty || !(tacosPresent || sidesPresent);
        this.setState({ isCartEmpty });
    }

    getCount = items => isEmptyObject(items) ? 0 : Object.keys(items).reduce((total, item) => total += getPathValue(items[item], 'count', 0), 0);

    getTotal = (tacos, sides, addOns) => {
        if (isEmptyObject(tacos) && isEmptyObject(sides) && isEmptyObject(addOns)) return 0;

        let [tacosPrice, sidesPrice, addOnsPrice] = [0, 0, 0];
        tacosPrice = isEmptyObject(tacos) ? 0 : Object.keys(tacos).reduce((total, taco) => total += getPathValue(tacos[taco], 'count', 0) * getPathValue(tacos[taco], 'price', 0), 0);
        sidesPrice = isEmptyObject(sides) ? 0 : Object.keys(sides).reduce((total, side) => total += getPathValue(sides[side], 'count', 0) * getPathValue(sides[side], 'price', 0), 0);
        addOnsPrice = isEmptyObject(addOns) ? 0 : Object.keys(addOns).reduce((total, addOn) => total += addOns[addOn] ? 0.99 : 0, 0);
        return tacosPrice + sidesPrice + addOnsPrice;
    }

    render = () => {
        const { tacos, sides, addOns } = this.props;

        return <>
            <div className={classes.title}>Order Summary</div>
            {this.state.isCartEmpty ? <div className={classes.noData}>You haven't selected any items yet :(</div> :
                <div className={classes.contentWrapper}>
                    <div className={classes.billWrapper}>
                        {!isEmptyObject(tacos) && Object.keys(tacos).map((taco, index) => getPathValue(tacos[taco], 'count', 0) > 0 && <div key={`cart-taco-${index}`} className={classes.cartItemWrapper}>
                            <div className={classes.item}>{getPathValue(tacos[taco], 'name', '')}</div>
                            <div className={classes.quantity}>({getPathValue(tacos[taco], 'count', 0)})</div>
                            <div className={classes.price}>${(getPathValue(tacos[taco], 'count', 0) * getPathValue(tacos[taco], 'price', 0)).toFixed(2)}</div>
                        </div>
                        )}
                        {!isEmptyObject(sides) && Object.keys(sides).map((side, index) => getPathValue(sides[side], 'count', 0) > 0 && <div key={`cart-side-${index}`} className={classes.cartItemWrapper}>
                            <div className={classes.item}>{getPathValue(sides[side], 'name', '')}</div>
                            <div className={classes.quantity}>({getPathValue(sides[side], 'count', 0)})</div>
                            <div className={classes.price}>${(getPathValue(sides[side], 'count', 0) * getPathValue(sides[side], 'price', 0)).toFixed(2)}</div>
                        </div>
                        )}
                        {!isEmptyObject(addOns) && Object.keys(addOns).map((addOn, index) => getPathValue(addOns, addOn, false) && <div key={`cart-addon-${index}`} className={classes.cartItemWrapper}>
                            <div className={classes.item} style={{ flex: 1 }}>Extra {addOn}</div>
                            <div className={classes.price}>$0.99</div>
                        </div>
                        )}
                        <div className={classes.divider} />
                        <div className={classes.amountWrapper}>
                            <div className={classes.amountText}>Sub total</div>
                            <div className={classes.price}>${this.getTotal(tacos, sides, addOns).toFixed(2)}</div>
                        </div>
                        <div className={classes.divider} />
                        <div className={classes.amountWrapper}>
                            <div className={classes.amountText}>Taxes</div>
                            <div className={classes.price}>${(0.1 * this.getTotal(tacos, sides, addOns)).toFixed(2)}</div>
                        </div>
                    </div>
                    <div className={classes.totalAmountWrapper}>
                        <div className={classes.totalAmountText}>Amount Payable</div>
                        <div className={classes.totalAmount}>${(1.1 * this.getTotal(tacos, sides, addOns)).toFixed(2)}</div>
                    </div>
                </div>
            }
        </>;
    }
};