import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import { rows } from './rows';
import InputRow from './components/InputRow';

export default class Calculator extends React.Component {

    state = {
        expression: '0'
    }

    // invoked whenever theme changes in order to trigger themed function call
    updateComponent = (refresher = null) => refresher && this.setState({ refresher });

    onButtonClick = button => {
        this.setState({ expression: this.state.expression + button });
    }

    render = () => <Page shouldComponentUpdate={this.updateComponent}>
        <div className={classes.calculatorContainer}>
            <div className={classes.calculatorWrapper}>
                <div className={classes.displayWrapper}>
                    <div className={classes.displayText}>{this.state.expression}</div>
                </div>
                {rows.map((row, index) => <InputRow key={`buttons-row-${index}`} row={row} index={index} onButtonClick={this.onButtonClick} />)}
            </div>
        </div>
    </Page>
}

// pass each row to input row
// render buttons based on row
// use position to determine colour
// pass operation methods from calc -> row -> button
// show 0 when input = ''
// apply validations for edge cases
// toggle sign change functionality