import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import { rows } from './rows';
import InputRow from './components/InputRow';

export default class Calculator extends React.Component {

    render = () => <Page>
        <div className={classes.calculatorContainer}>
            {rows.map((row, index) => <InputRow key={`buttons-row-${index}`} row={row} index={index} />)}
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