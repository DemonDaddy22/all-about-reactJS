import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import CarouselCard from './components/CarouselCard';
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

const images = ['https://images.unsplash.com/photo-1432847712612-926caafaa802?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&auto=format&fit=crop&w=2849&q=80',
    'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=2869&q=80',
    'https://images.unsplash.com/photo-1484268234627-2278797bec04?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'];

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