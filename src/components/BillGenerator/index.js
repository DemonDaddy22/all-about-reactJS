import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import TacoMenu from './components/TacoMenu';
import Bill from './components/Bill';

export default class BillGenerator extends React.Component {

    state = {
        tacos: {
            beans: { price: 2.99, count: 0 },
            chicken: { price: 3.49, count: 0 },
            fish: { price: 3.49, count: 0 },
            pork: { price: 3.99, count: 0 }
        },
        sides: {
            vegQuesadilla: { price: 1.99, count: 0 },
            chickenQuesadilla: { price: 2.49, count: 0 },
            fries: { price: 2.49, count: 0 },
            soda: { price: 2.49, count: 0 }
        },
        addOns: {
            cheese: false,
            beans: false
        }
    }

    handleTacoChange = (e, taco) => this.setState(prevState => ({ tacos: { ...prevState.tacos, [taco]: { price: prevState.tacos.price, count: e.target.value } } }));

    handleSideChange = (e, side) => this.setState(prevState => ({ sides: { ...prevState.sides, [side]: { price: prevState.sides.price, count: e.target.value } } }));

    handleAddOnChange = (e, addOn) => this.setState(prevState => ({ addOns: { ...prevState.addOns, [addOn]: !prevState['addOns'][addOn] } }));

    render = () => {
        const { tacos, sides, addOns } = this.state;

        return <Page>
            <div className={classes.title}>Taco Shack</div>
            <div className={classes.subtitle}>For the <em><span style={{ fontWeight: 600, color: 'var(--theme-color)' }}>Mexican</span></em> inside you!</div>
            <div className={classes.container}>
                <div className={classes.menuContainer}>
                    <TacoMenu tacos={tacos} sides={sides} addOns={addOns}
                        handleTacoChange={this.handleTacoChange} handleSideChange={this.handleSideChange} handleAddOnChange={this.handleAddOnChange} />
                </div>
                <div className={classes.billContainer}>
                    <div className={classes.leftCircle}></div>
                    <div className={classes.rightCircle}></div>
                    <Bill tacos={tacos} sides={sides} addOns={addOns} />
                </div>
            </div>
        </Page>
    }
}