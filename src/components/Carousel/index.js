import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import CarouselCard from './components/CarouselCard';
import Button from '../../ui-components/Button';

const images = ['https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1978&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'];

export default class Carousel extends React.Component {

    state = {
        translateX: 0
    }

    handleBtnClick = direction => {
        let translateX;
        const incrementer = direction === 'left' ? 100 : -100;
        if (direction === 'left' && this.state.translateX === 0) translateX = -100 * (images.length - 1);
        else if (direction === 'right' && this.state.translateX === -100 * (images.length - 1)) translateX = 0;
        else translateX = this.state.translateX + incrementer;
        this.setState({ translateX });
    }

    render = () => <Page>
        <div className={classes.carouselWrapper}>
        <Button onClick={() => this.handleBtnClick('left')} labelStyles={{ display: 'inline-flex', padding: 0 }}>Left</Button>
        <Button onClick={() => this.handleBtnClick('right')} labelStyles={{ display: 'inline-flex', padding: 0 }}>Right</Button>
            <div className={classes.carouselContainer}>
                {images.map((image, index) => <CarouselCard key={index} img={image} className={classes.slide} style={{ transform: `translateX(${this.state.translateX}%)`}} />)}
            </div>
        </div>
    </Page>
}