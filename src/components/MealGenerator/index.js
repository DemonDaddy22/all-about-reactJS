import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import { handleError } from '../../utils';

export default class MealGenerator extends React.Component {

    state = {
        loader: true,
        mealData: null
    }

    componentDidMount = () => {
        this.fetchMealData();
    }

    fetchMealData = () => this.setState({ loader: true }, () => fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(handleError)
        .then(res => res.json())
        .then(data => this.setState({ loader: false, mealData: data, snack: null }, () => console.log(data)))
        .catch(error => this.setState({
            loader: false, mealData: null, snack: {
                open: true,
                message: error.message,
                severity: 'error'
            }
        })));

    render = () => {

        return <Page>
            Meal Generator
        </Page>
    }
}