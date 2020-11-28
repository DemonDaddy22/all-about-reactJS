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
            <div className={classes.title}>Pokédex</div>
            <div className={classes.inputWrapper}>
                <div className={classes.label}>Search <span className={classes.pokemonTitle}>Pokémon</span> by</div>
            </div>
        </Page>
    }
}
