import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import Input from '../../ui-components/Input';
import CustomSwitch from '../../ui-components/Switch';
import Button from '../../ui-components/Button';
import Label from '../../ui-components/Label';
import { themed } from '../../utils/theme';
import { GREEN_400, GREEN_500, PURPLE_200, PURPLE_300, PURPLE_700, PURPLE_800, RED_500, RED_700 } from '../../resources/colors';

const OPTIONS = Object.freeze({
    lowercase: [[97, 123]],
    uppercase: [[65, 91]],
    numeric: [[48, 58]],
    special: [[33, 48], [58, 65], [91, 97], [123, 127]]
});

export default class PasswordGenerator extends React.Component {

    state = {
        passwordString: 'Test',
        passwordLength: '10',
        lowercase: true,
        uppercase: true,
        numeric: true,
        special: true
    }

    updateComponent = (refresher = null) => refresher && this.setState({ refresher });

    handleChangeLength = e => {
        const length = e.target.value;
        if (parseInt(length) > 7 && parseInt(length) < 21) this.setState({ passwordLength: length, passwordLengthValidation: null });
        else this.setState({ passwordLengthValidation: 'Length must be between 8 and 20' });
    };

    handleSwitch = key => this.setState({ [key]: !this.state[key] });

    handleGeneratePassword = () => {
        const characterTypes = Object.keys(OPTIONS).filter(option => this.state[option]);
        this.setState({ passwordString: this.generatePasswordHelper(characterTypes) });
    }

    generatePasswordHelper = options => {
        let passwordString = '', i = 0;

        while (i++ < parseInt(this.state.passwordLength)) {
            const optionIndex = Math.floor(Math.random() * options.length);
            passwordString += this.getRandomCharacter(OPTIONS[options[optionIndex]]);
        }

        return passwordString;
    }

    getRandomCharacter = characterRange => {
        const rangeIndex = Math.floor(Math.random() * characterRange.length);
        const charCode = Math.floor(Math.random() * (characterRange[rangeIndex][1] - characterRange[rangeIndex][0])) + characterRange[rangeIndex][0];
        return String.fromCharCode(charCode);
    }

    render = () => {
        const { passwordString, passwordLength, lowercase, uppercase, numeric, special } = this.state;

        return <Page shouldComponentUpdate={this.updateComponent}>
            <div className={classes.generatorWrapper}>
                <div className={classes.generatorContainer}>
                    <div className={classes.passwordContainer}>{passwordString}</div>
                    <div className={classes.optionsContainer}>
                        <div className={classes.optionRow}>
                            <div className={classes.optionText}>Password length</div>
                            <Input type='number' value={passwordLength} fullWidth={false} onChange={this.handleChangeLength}
                                style={{ width: '10%', marginRight: '0.75rem' }} rootInputStyles={{ color: 'var(--text)', transition: 'color 0.5s ease-in-out' }} />
                        </div>
                        {this.state?.passwordLengthValidation && <Label label={this.state.passwordLengthValidation}
                            style={{ color: themed(RED_700, RED_500) }} className={classes.validation}></Label>}
                        <div className={classes.optionRow}>
                            <div className={classes.optionText}>Contains lowercase</div>
                            <CustomSwitch buttoncolor={themed(PURPLE_800, PURPLE_700)} trackcolor={themed(PURPLE_300, PURPLE_200)} onChange={() => this.handleSwitch('lowercase')} checked={lowercase} containerStyle={{ marginRight: 0 }} />
                        </div>
                        <div className={classes.optionRow}>
                            <div className={classes.optionText}>Contains uppercase</div>
                            <CustomSwitch buttoncolor={themed(PURPLE_800, PURPLE_700)} trackcolor={themed(PURPLE_300, PURPLE_200)} onChange={() => this.handleSwitch('uppercase')} checked={uppercase} containerStyle={{ marginRight: 0 }} />
                        </div>
                        <div className={classes.optionRow}>
                            <div className={classes.optionText}>Contains numbers</div>
                            <CustomSwitch buttoncolor={themed(PURPLE_800, PURPLE_700)} trackcolor={themed(PURPLE_300, PURPLE_200)} onChange={() => this.handleSwitch('numeric')} checked={numeric} containerStyle={{ marginRight: 0 }} />
                        </div>
                        <div className={classes.optionRow}>
                            <div className={classes.optionText}>Contains special</div>
                            <CustomSwitch buttoncolor={themed(PURPLE_800, PURPLE_700)} trackcolor={themed(PURPLE_300, PURPLE_200)} onChange={() => this.handleSwitch('special')} checked={special} containerStyle={{ marginRight: 0 }} />
                        </div>
                        <Button backgroundColor={themed(GREEN_500, GREEN_400)} className={classes.generateButton} onClick={this.handleGeneratePassword} labelStyles={{ display: 'inline-flex', padding: 0 }}>Generate Password</Button>
                    </div>
                </div>
            </div>
        </Page>
    }
}