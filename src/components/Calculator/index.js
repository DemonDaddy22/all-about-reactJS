import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import { rows } from './rows';
import InputRow from './components/InputRow';
import SnackBar from '../../ui-components/SnackBar';
import { isEmptyString } from '../../utils';

const operators = ['+', '-', '×', '÷', '%'];
const operatorMap = Object.freeze({
    '+': '+',
    '-': '-',
    '×': '*',
    '÷': '/',
    '%': '%'
});

export default class Calculator extends React.Component {

    state = {
        expression: '0'
    }

    // invoked whenever theme changes in order to trigger themed function call
    updateComponent = (refresher = null) => refresher && this.setState({ refresher });

    onButtonClick = button => {
        let expression = this.state.expression === '0' ? '' : this.state.expression;
        switch (button) {
            case '=':
                // evaluate the expression
                try {
                    // eval is not recommended as it can execute any expression which is passed on as value
                    // eslint-disable-next-line
                    expression = eval(expression);
                    this.setState({ expression: `${expression}` });
                } catch (e) {
                    const snack = {
                        snackOpen: true,
                        snackMessage: e.message,
                        snackSeverity: 'error'
                    }
                    this.setState({ snack });
                } finally {
                    break;
                }

            case 'AC':
                this.clearExpression();
                break;

            case 'DEL':
                // removes the trailing character
                expression = !isEmptyString(expression) ? expression.slice(0, expression.length - 1) : '';
                // if the string becomes empty after removal, replace with 0
                expression = isEmptyString(expression) ? '0' : expression;
                this.setState({ expression });
                break;

            default:
                // add any other input to the expression string
                if (this.isOperator(button)) expression += this.getOperator(button);
                else expression += button;
                this.setState({ expression });
        }
    }

    isOperator = button => operators.includes(button);

    getOperator = button => operatorMap[button];

    clearExpression = () => this.setState({ expression: '0' });

    handleSnackClose = () => this.setState({ snack: { ...this.state.snack, snackOpen: false } });

    render = () => <Page shouldComponentUpdate={this.updateComponent}>
        <div className={classes.calculatorContainer}>
            <div className={classes.calculatorWrapper}>
                <div className={classes.displayWrapper}>
                    <div className={classes.displayText}>{this.state.expression}</div>
                </div>
                {rows.map((row, index) => <InputRow key={`buttons-row-${index}`} row={row} index={index} onButtonClick={this.onButtonClick} />)}
            </div>
        </div>
        {this.state?.snack?.snackMessage && <SnackBar message={this.state.snack.snackMessage} severity={this.state.snack.snackSeverity} handleClose={this.handleSnackClose} open={this.state.snack.snackOpen} />}
    </Page>
}