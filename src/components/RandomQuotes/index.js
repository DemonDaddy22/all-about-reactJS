import React from 'react';
import Page from '../../ui-components/Page';
import { getPathValue, handleError } from '../../utils';
import QuoteCard from './components/QuoteCard';

import classes from './styles.module.css';

export default class RandomQuotes extends React.Component {

    state = {
        loader: false,
        quotes: [],
        page: 0,
        totalCount: 0
    }

    componentDidMount = () => this.fetchQuotes(this.state.page);

    // get list of quotes
    // add infinite scrolling after 10 quotes

    fetchQuotes = (page, limit = 10) => this.setState({ loader: true }, () => fetch(`https://api.quotable.io/quotes?limit=${limit}&skip=${page}`)
        .then(handleError)
        .then(res => res.json())
        .then(data => this.setState(prevState => ({
            loader: false, quotes: [...prevState.quotes, ...getPathValue(data, 'results', [])], page: prevState.page + 1, totalCount: getPathValue(data, 'totalCount', 0)
        }), () => getPathValue(data, 'results', []).forEach((quote, index) => setTimeout(() => this.toggleQuoteVisibility(quote._id, true), index * 50))))
        .catch(error => this.setState({
            loader: false, snack: {
                open: true,
                message: error.message,
                severity: 'error'
            }
        })));

    toggleQuoteVisibility = (id, visible, callback) => this.setState(prevState => ({
        quotes: prevState.quotes.map(quote => id && quote._id === id ? { ...quote, visible } : quote)
    }), callback);

    render = () => <Page>
        {this.state.quotes.map((quote, index) => <QuoteCard key={`quote-${getPathValue(quote, '_id', index)}`} quote={quote.content} />)}
    </Page>
}