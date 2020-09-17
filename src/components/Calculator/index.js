import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import rows from './rows';

export default class Calculator extends React.Component {

    render = () => <Page>
        <div className={classes.calculatorContainer}>
            {rows.map((row, index) => <InputRow />)}
        </div>
    </Page>
}