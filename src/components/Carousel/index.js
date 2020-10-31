import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import CarouselCard from './components/CarouselCard';
import Button from '../../ui-components/Button';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

const images = ['https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1978&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'];

export default class Carousel extends React.Component {

    state = {
        index: 0
    }

    handleBtnClick = index => this.setState({ index: index < 0 ? images.length - 1 : index === images.length ? 0 : index });

    render = () => <Page>
        <div className={classes.wrapper}>
            <div className={classes.carouselWrapper}>
                <div className={`${classes.slideControl} ${classes.leftControl}`} onClick={() => this.handleBtnClick(this.state.index - 1)}><ChevronLeftRoundedIcon fontSize='large' /></div>
                <div className={`${classes.slideControl} ${classes.rightControl}`} onClick={() => this.handleBtnClick(this.state.index + 1)}><ChevronRightRoundedIcon fontSize='large' /></div>
                <div className={classes.carouselContainer}>
                    {images.map((image, index) => <CarouselCard key={index} img={image} className={classes.slide} style={{ transform: `translateX(${this.state.index * (-100)}%)` }} />)}
                </div>
                <div className={classes.roundButtonsWrapper}>
                    {images.map((image, index) => <div className={`${classes.roundButton} ${this.state.index === index && classes.activeButton}`} onClick={() => this.handleBtnClick(index)}></div>)}
                </div>
            </div>
        </div>
    </Page>
}