import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import { InputAdornment } from '@material-ui/core';
import Input from '../../ui-components/Input';
import Iconbutton from '../../ui-components/Button/Iconbutton';
import { handleError, isEmptyString } from '../../utils';

export default class Pokedex extends React.Component {

    state = {
        loader: true,
        index: 1,
        name: '',
        pokemonData: null
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

    // add error handling for indices < 1 and empty strings
    handleValueChange = (e, key) => {
        if (isEmptyString(key)) return;
        const value = e.target.value;
        this.setState({ [key]: value });
    }

    handleInputSubmit = key => {
        if (isEmptyString(key)) return;
        const value = this.state[key], initValue = key === 'index' ? 0 : '';
        this.setState({ [key]: initValue }, () => this.fetchPokemonData(value));
    }

    render = () => {
        const { index, name } = this.state;

        return <Page shouldComponentUpdate={this.updateComponent}>
            <div className={classes.title}>Pokédex</div>
            <div className={classes.inputContainer}>
                <div className={classes.label}>Search <span className={classes.pokemonTitle}>Pokémon</span> by</div>
                <div className={classes.inputWrapper}>
                    <div className={classes.searchInput}>
                        <Input autoComplete='off' id='index' type='number' label='Index' onChange={e => this.handleValueChange(e, 'index')}
                            value={index} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            InputProps={{
                                endAdornment: <InputAdornment position='end'>
                                    <Iconbutton iconColor='var(--text)' onClick={() => this.handleInputSubmit('index')} icon={<DoneOutlineRoundedIcon />}></Iconbutton></InputAdornment>
                            }} />
                    </div>
                    <div className={classes.searchInput}>
                        <Input autoComplete='off' id='name' label='Name' onChange={e => this.handleValueChange(e, 'name')}
                            value={name} variant='outlined' rootInputStyles={{ color: 'var(--text)', borderRadius: 'inherit' }}
                            InputProps={{
                                endAdornment: <InputAdornment position='end'>
                                    <Iconbutton iconColor='var(--text)' onClick={() => this.handleInputSubmit('name')} icon={<DoneOutlineRoundedIcon />}></Iconbutton></InputAdornment>
                            }} />
                    </div>
                </div>
            </div>
        </Page>
    }
}
