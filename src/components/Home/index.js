import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';

export default class Home extends React.Component {

    render = () => <Page>
        <div className={classes.homeContainer}>
            <div className={classes.headerWrapper}>
                <div className={classes.header}>
                    <span className={classes.headerText}>All about React<div className={classes.underline}></div></span><span className={classes.headerHighlight}>JS</span>
                </div>
            </div>
        </div>
    </Page>;
}