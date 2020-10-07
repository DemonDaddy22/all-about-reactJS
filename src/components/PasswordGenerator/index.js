import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';

export default class PasswordGenerator extends React.Component {

    state = {
        passwordString: 'Test'
    }

    render = () => {

        return <Page>
            <div className={classes.generatorWrapper}>
                <div className={classes.generatorContainer}>
                    <div className={classes.passwordContainer}>
                        {this.state.passwordString}
                    </div>
                    <div className={classes.optionsContainer}>
                        
                    </div>
                </div>
            </div>
        </Page>
    }
}