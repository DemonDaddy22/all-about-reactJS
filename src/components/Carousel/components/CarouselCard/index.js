import React from 'react';

import classes from './styles.module.css';

const CarouselCard = React.memo(({ img, style, className }) => {

    return <img className={`${classes.img} ${className}`} src={img} style={style} alt='carousel'></img>;
});

export default CarouselCard;