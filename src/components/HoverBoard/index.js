import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import BoardCell from './components/BoardCell';

export default class HoverBoard extends React.Component {

    state = {
        boardSize: 0
    }

    componentDidMount = () => {
        window.addEventListener('resize', this.handleWindowResize);
        this.setBoardSize(window.innerWidth || document.body.clientWidth);
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize = () => {
        const deviceWidth = window.innerWidth || document.body.clientWidth;
        this.setBoardSize(deviceWidth);
    }

    setBoardSize = width => this.setState({ boardSize: this.getBoardSize(width) });

    getBoardSize = width => {
        if (width >= 900) return 500;
        else if (width >= 768) return 400;
        return 200;
    }

    updateComponent = (refresher = null) => refresher && this.setState({ refresher });

    // try adding onClick on each cell and ripple out the colour in 2-1-2-1-2-1-2-1 way

    render = () => {
        let cells = [];
        for (let i = 0; i < this.state.boardSize; i++) cells.push(<BoardCell key={`cell-${i}`} />);

        return <Page shouldComponentUpdate={this.updateComponent}>
            <div className={classes.boardWrapper}>
                <div className={classes.board}>
                    {cells}
                </div>
            </div>
        </Page>;
    }
}