import React from 'react';
import './App.css';
import Todos from './components/Todos';
import PricingCards from './components/PricingCards';

export default class App extends React.Component {

    render = () => {
        // return <Todos />;
        return <PricingCards />
    }
}
