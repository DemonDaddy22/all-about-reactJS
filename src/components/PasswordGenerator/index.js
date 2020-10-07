import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import Input from '../../ui-components/Input';
import CustomSwitch from '../../ui-components/Switch';

const OPTIONS = Object.freeze({
    lowercase: [[97, 122]],
    uppercase: [[65, 90]],
    numeric: [[48, 57]],
    special: [[33, 47], [58, 64], [91, 96], [123, 126]]
});

export default class PasswordGenerator extends React.Component {

    state = {
        passwordString: 'Test',
        passwordLength: 10,
        lowercase: true,
        uppercase: true,
        numeric: true,
        special: true
    }

    render = () => {
        const { passwordString, passwordLength, lowercase, uppercase, numeric, special } = this.state;

        return <Page>
            <div className={classes.generatorWrapper}>
                <div className={classes.generatorContainer}>
                    <div className={classes.passwordContainer}>{passwordString}</div>
                    <div className={classes.optionsContainer}>
                        <div className={classes.optionRow}>
                            <div className={classes.optionText}>Password length</div>
                            <Input type='number' value={passwordLength} min={8} max={20} fullWidth={false}
                                style={{ width: '10%', marginRight: '0.75rem' }} rootInputStyles={{ color: 'var(--text)', transition: 'color 0.5s ease-in-out' }} />
                        </div>
                        <div className={classes.optionRow}>
                            <div className={classes.optionText}>Contains lowercase</div>
                            <CustomSwitch checked={lowercase} containerStyle={{ marginRight: 0 }} />
                        </div>
                        <div className={classes.optionRow}>
                            <div className={classes.optionText}>Contains uppercase</div>
                            <CustomSwitch checked={uppercase} containerStyle={{ marginRight: 0 }} />
                        </div>
                        <div className={classes.optionRow}>
                            <div className={classes.optionText}>Contains numbers</div>
                            <CustomSwitch checked={numeric} containerStyle={{ marginRight: 0 }} />
                        </div>
                        <div className={classes.optionRow}>
                            <div className={classes.optionText}>Contains special</div>
                            <CustomSwitch checked={special} containerStyle={{ marginRight: 0 }} />
                        </div>
                    </div>
                </div>
            </div>
        </Page>
    }
}