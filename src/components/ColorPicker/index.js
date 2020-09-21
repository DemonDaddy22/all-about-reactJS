import React from 'react';
import Page from '../../ui-components/Page';

import classes from './styles.module.css';

export default class ColorPicker extends React.Component {

    render = () => {

        return <Page>
            <div className={classes.pickerContainer}>
                <div className={classes.headerContainer}>
                    <div className={classes.header}>
                        Color Picker
                    </div>
                </div>
                <div className={classes.palette}></div>
            </div>
        </Page>;
    }
}