import React from 'react';
import Page from '../../ui-components/Page';
import { handleError } from '../../utils';

import classes from './styles.module.css';

export default class RandomQuotes extends React.Component {

    state = {
        loader: false
    }

    componentDidMount = () => this.fetchQuote();

    // get list of quotes
    // add infinite scrolling after 10 quotes

    fetchQuote = () => this.setState({ loader: true }, () => fetch('https://api.quotable.io/random')
        .then(handleError)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error(error)));

    render = () => <Page>QUOTES</Page>
}