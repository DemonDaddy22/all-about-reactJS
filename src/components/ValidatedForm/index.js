import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';

export default class ValidatedForm extends React.Component {

    render = () => <Page>
        <div className={classes.formWrapper}>
            <div className={classes.formContainer}>
                <div className={classes.heading}>Register Here</div>
                <div className={classes.info}>This is just a template form, none of the information you fill, will be stored anywhere.</div>
                <div className={classes.formComponents}></div>
            </div>
        </div>
    </Page>
}