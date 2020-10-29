import React from 'react';

import classes from './styles.module.css';

const CarouselCard = React.memo(({ img }) => {

    return <img className={classes.img} src={img} alt='carousel'></img>;
});

export default CarouselCard;