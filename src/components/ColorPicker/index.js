import React from 'react';

import classes from './styles.module.css';
import Iconbutton from '../../ui-components/Button/Iconbutton';
import Page from '../../ui-components/Page';
import { getColours, isColourDark } from '../../utils';
import ColorCard from './components/ColorCard';
import ColorLensRoundedIcon from '@material-ui/icons/ColorLensRounded';

export default class ColorPicker extends React.Component {

    state = {
        colours: [],
        selectedColour: null,
        headerColour: null
    }

    componentDidMount = () => {
        this.getColours();
    }

    getColours = () => this.setState({ colours: getColours(9) });

    handleColourChange = colour => this.setState({ selectedColour: colour }, () => this.updateHeaderColour(colour));

    updateHeaderColour = colour => this.setState({ headerColour: isColourDark(colour) ? '#fff' : '#000' });

    render = () => {
        const { colours, selectedColour, headerColour } = this.state;

        return <Page>
            <div className={classes.pickerContainer}>
                <div style={selectedColour && { backgroundColor: selectedColour }} className={classes.headerContainer}>
                    <div style={headerColour && { color: headerColour }} className={classes.header}>
                        Color Picker
                    </div>
                    <Iconbutton iconColor='#fff' onClick={this.getColours} icon={<ColorLensRoundedIcon fontSize='large' />}></Iconbutton>
                </div>
                <div className={classes.palette}>
                    {colours.map((colour, index) => <ColorCard key={`colour-card-${index}`} colour={colour} handleColourChange={this.handleColourChange} />)}
                </div>
            </div>
        </Page>;
    }
}