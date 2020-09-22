import React from 'react';
import Page from '../../ui-components/Page';
import { getColours } from '../../utils';
import ColorCard from './components/ColorCard';

import classes from './styles.module.css';

export default class ColorPicker extends React.Component {

    state = {
        colours: []
    }

    componentDidMount = () => {
        this.getColours();
    }

    getColours = () => this.setState({ colours: getColours(9) });

    render = () => {

        return <Page>
            <div className={classes.pickerContainer}>
                <div className={classes.headerContainer}>
                    <div className={classes.header}>
                        Color Picker
                    </div>
                </div>
                <div className={classes.palette}>
                    {this.state.colours.map((colour, index) => <ColorCard key={`colour-card-${index}`} colour={colour} />)}
                </div>
            </div>
        </Page>;
    }
}