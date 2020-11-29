import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import { InputAdornment } from '@material-ui/core';
import Input from '../../ui-components/Input';
import Iconbutton from '../../ui-components/Button/Iconbutton';
import { handleError, isEmptyString } from '../../utils';
import { themed } from '../../utils/theme';
import { RED_500, RED_700 } from '../../resources/colors';

export default class Pokedex extends React.Component {

    state = {
        loader: true,
        index: 1,
        name: 'Bulbasaur',
        pokemonData: null,
        error: null
    }

    updateComponent = (refresher = null) => refresher && this.setState({ refresher });

    fetchPokemonData = pokemon => this.setState({ loader: true }, () => fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(handleError)
        .then(res => res.json())
        .then(data => this.setState({ loader: false, pokemonData: data, snack: null }))
        .catch(error => this.setState({
            loader: false, pokemonData: null, snack: {
                open: true,
                message: error.message,
                severity: 'error'
            }
        })));

    handleValueChange = (e, key) => {
        if (isEmptyString(key)) return;
        const value = e.target.value;
        this.setState({ [key]: value });
    }

    handleIndexSubmit = () => {
        const index = this.state.index;
        if (index < 1) this.setState({ error: { ...this.state.error, index: { error: true, label: 'Index cannot be less than 1' } } });
        else this.setState({ error: { ...this.state.error, index: { error: false, label: '' } } }, () => this.fetchPokemonData(index));
    }

    handleNameSubmit = () => {
        const name = this.state.name;
        if (isEmptyString(name)) this.setState({ error: { ...this.state.error, name: { error: true, label: 'Name cannot be empty' } } });
        else this.setState({ error: { ...this.state.error, name: { error: false, label: '' } } }, () => this.fetchPokemonData(name));
    }

    render = () => {
        const { index, name, error } = this.state;

        return <Page shouldComponentUpdate={this.updateComponent}>
            <div className={classes.title}>Pokédex</div>
            <div className={classes.inputContainer}>
                <div className={classes.label}>Search <span className={classes.pokemonTitle}>Pokémon</span> by</div>
                <div className={classes.inputWrapper}>
                    <div className={classes.searchInput}>
                        <Input autoComplete='off' id='index' type='number' label='Index' onChange={e => this.handleValueChange(e, 'index')}
                            value={index} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={error?.index?.error} helperText={error?.index?.label} helpertextcolor={themed(RED_700, RED_500)}
                            InputProps={{
                                endAdornment: <InputAdornment position='end'>
                                    <Iconbutton iconColor='var(--text)' onClick={() => this.handleIndexSubmit()} icon={<DoneOutlineRoundedIcon />}></Iconbutton></InputAdornment>
                            }} />
                    </div>
                    <div className={classes.searchInput}>
                        <Input autoComplete='off' id='name' label='Name' onChange={e => this.handleValueChange(e, 'name')}
                            value={name} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            error={error?.name?.error} helperText={error?.name?.label} helpertextcolor={themed(RED_700, RED_500)}
                            InputProps={{
                                endAdornment: <InputAdornment position='end'>
                                    <Iconbutton iconColor='var(--text)' onClick={() => this.handleNameSubmit()} icon={<DoneOutlineRoundedIcon />}></Iconbutton></InputAdornment>
                            }} />
                    </div>
                </div>
            </div>
        </Page>
    }
}
