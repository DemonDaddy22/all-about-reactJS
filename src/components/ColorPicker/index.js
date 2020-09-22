import React from 'react';
import Page from '../../ui-components/Page';
import { getColours } from '../../utils';
import ColorCard from './components/ColorCard';

import classes from './styles.module.css';

export default class ColorPicker extends React.Component {

    state = {
        colours: [],
        selectedColour: null
    }

    componentDidMount = () => {
        this.getColours();
    }

    getColours = () => this.setState({ colours: getColours(9) });

    handleColourChange = colour => this.setState({ selectedColour: colour });

    render = () => {
        const { colours, selectedColour } = this.state;

        return <Page>
            <div className={classes.pickerContainer}>
                <div style={selectedColour && { backgroundColor: selectedColour }} className={classes.headerContainer}>
                    <div className={classes.header}>
                        Color Picker
                    </div>
                </div>
                <div className={classes.palette}>
                    {colours.map((colour, index) => <ColorCard key={`colour-card-${index}`} colour={colour} handleColourChange={this.handleColourChange} />)}
                </div>
            </div>
        </Page>;
    }
}