import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';

export default class Pokedex extends React.Component {

    state = {
        loader: true
    }

    updateComponent = (refresher = null) => refresher && this.setState({ refresher });
    
    render = () => {

        return <Page shouldComponentUpdate={this.updateComponent}>
            Pokedex
        </Page>
    }
}
