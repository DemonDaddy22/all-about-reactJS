import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Routes from './routes';

export default class App extends React.Component {

    render = () => {
        return <HashRouter><Routes /></HashRouter>;
    }
}
