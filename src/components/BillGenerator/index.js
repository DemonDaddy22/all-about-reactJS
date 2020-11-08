import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import TacoMenu from './components/TacoMenu';
import Bill from './components/Bill';

export default class BillGenerator extends React.Component {

    render = () => {

        return <Page>
            <div className={classes.title}>Taco Shack</div>
            <div className={classes.subtitle}>For the <em><span style={{ fontWeight: 600, color: 'var(--theme-color)' }}>Mexican</span></em> inside you!</div>
            <div className={classes.container}>
                <div className={classes.menuContainer}>
                    <TacoMenu />
                </div>
                <div className={classes.billContainer}>
                    <Bill />
                </div>
            </div>
        </Page>
    }
}