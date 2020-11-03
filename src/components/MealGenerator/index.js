import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import { getPathValue, handleError, isEmptyList, isEmptyObject, isEmptyString } from '../../utils';

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
        .then(data => this.setState({ loader: false, mealData: data?.meals, snack: null }, () => {
            console.log(data.meals);
            console.log(this.getIngredients(data.meals[0]));
            console.log(this.getMeasurements(data.meals[0]));
            console.log(this.getTags(data.meals[0]));
        }))
        .catch(error => this.setState({
            loader: false, mealData: null, snack: {
                open: true,
                message: error.message,
                severity: 'error'
            }
        })));

    getIngredients = meal => {
        if (isEmptyObject(meal)) return null;
        let ingredients = {};
        for (let key in meal) {
            if (key.includes('strIngredient') && !isEmptyString(meal[key])) {
                const ingredientKey = key.replace('strIngredient', '');
                ingredients[ingredientKey] = meal[key];
            }
        }
        return ingredients;
    }

    getMeasurements = meal => {
        if (isEmptyObject(meal)) return null;
        let measurements = {};
        for (let key in meal) {
            if (key.includes('strMeasure') && !isEmptyString(meal[key])) {
                const measurementKey = key.replace('strMeasure', '');
                measurements[measurementKey] = meal[key];
            }
        }
        return measurements
    }

    getTags = meal => {
        if (!getPathValue(meal, 'strTags')) return null;
        const tags = isEmptyString(meal['strTags']) ? [] : meal['strTags'].split(',');
        return tags;
    }

    render = () => {

        return <Page>
            Meal Generator
        </Page>
    }
}