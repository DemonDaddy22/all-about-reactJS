import React from 'react';

import classes from './styles.module.css';
import Iconbutton from '../../ui-components/Button/Iconbutton';
import Page from '../../ui-components/Page';
import { getColours, isColourDark, rgbToHex } from '../../utils';
import ColorCard from './components/ColorCard';
import ColorLensRoundedIcon from '@material-ui/icons/ColorLensRounded';
import Input from '../../ui-components/Input';

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
                    <div className={classes.inputWrapper}>
                        <Iconbutton iconColor='#fff' onClick={this.getColours} icon={<ColorLensRoundedIcon fontSize='large' />} style={{ marginRight: 8 }}></Iconbutton>
                        <Input id='color-picker' type='color' value={rgbToHex(selectedColour) || '#ffffff'} onChange={(e) => this.handleColourChange(e.target.value)} rootInputStyles={{ height: '2rem' }} />
                    </div>
                </div>
                <div className={classes.palette}>
                    {colours.map((colour, index) => <ColorCard key={`colour-card-${index}`} colour={colour} handleColourChange={this.handleColourChange} />)}
                </div>
            </div>
        </Page>;
    }
}