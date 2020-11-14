import React from 'react';

import classes from './styles.module.css';
import { Collapse } from '@material-ui/core';
import Page from '../../ui-components/Page';
import SpinnerLoader from '../../ui-components/SpinnerLoader';
import { copyTextToClipboard, getPathValue, handleError, isEmptyList } from '../../utils';
import QuoteCard from './components/QuoteCard';
import SnackBar from '../../ui-components/SnackBar';

export default class RandomQuotes extends React.Component {

    bottomRef = null;

    state = {
        loader: false,
        quotes: [],
        page: 0,
        hasMoreQuotes: false
    }

    componentDidMount = () => {
        this.fetchQuotes(this.state.page);
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (!this.state.loader && this.state.hasMoreQuotes && window.pageYOffset + window.innerHeight === this.bottomRef.offsetTop) {
            this.fetchQuotes(this.state.page);
        }
    }

    setCallbackRef = element => {
        this.bottomRef = element;
    }

    fetchQuotes = (page, limit = 10) => this.setState({ loader: true }, () => fetch(`https://api.quotable.io/quotes?limit=${limit}&skip=${page * limit}`)
        .then(handleError)
        .then(res => res.json())
        .then(data => this.setState(prevState => ({
            loader: false, quotes: [...prevState.quotes, ...getPathValue(data, 'results', [])], page: prevState.page + 1, hasMoreQuotes: [...prevState.quotes, ...getPathValue(data, 'results', [])].length < getPathValue(data, 'totalCount', 0)
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

    handleCopyQuote = quote => quote && copyTextToClipboard(quote);

    handleSnackClose = () => this.setState({ snack: { ...this.state.snack, open: false } });

    render = () => <Page>
        <div className={`${classes.loader} ${!this.state.loader && classes.hideLoader}`}><SpinnerLoader /></div>
        {!this.state.loader && isEmptyList(this.state.quotes) ? <div className={classes.noData}>No quotes could be fetched right now, please try again later</div>
            : <div className={classes.quotesContainer}>
                {this.state.quotes.map((quote, index) => <Collapse className={classes.collapseWrapper} key={`quote-${getPathValue(quote, '_id', index)}`} in={quote.visible} timeout={'auto'} mountOnEnter unmountOnExit>
                    <QuoteCard quote={quote.content} author={quote.author} className={classes.quoteWrapper} handleCopyQuote={this.handleCopyQuote} />
                </Collapse>)}
            </div>}
        <div ref={this.setCallbackRef}></div>
        {this.state?.snack?.message && <SnackBar message={this.state.snack.message} severity={this.state.snack.severity} handleClose={this.handleSnackClose} open={this.state.snack.open} />}
    </Page>
}