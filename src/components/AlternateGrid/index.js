import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import { data } from './config';
import GridRow from './components/GridRow';
import { themed } from '../../utils/theme';
import { GREEN_400, GREEN_600 } from '../../resources/colors';

export default class AlternateGrid extends React.Component {

    updateComponent = (refresher = null) => refresher && this.setState({ refresher });

    render = () => {

        return <Page shouldComponentUpdate={this.updateComponent}>
            <div className={classes.title}><span style={{ color: themed(GREEN_600, GREEN_400) }}>Lambo</span>Love</div>
            <div className={classes.container}>
                {data.map((row, index) => <GridRow row={row} />)}
            </div>
        </Page>;
    }
}