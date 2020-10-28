import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import CarouselCard from './components/CarouselCard';

export default class Carousel extends React.Component {

    render = () => <Page>
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
        <CarouselCard />
    </Page>
}