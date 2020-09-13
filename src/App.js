import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

export default class App extends React.Component {

    render = () => {
        return <BrowserRouter><Routes /></BrowserRouter>;
    }
}
