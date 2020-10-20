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
        this.setBoardSize(this.getDeviceWidth());
    }

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    handleWindowResize = () => this.setBoardSize(this.getDeviceWidth());

    setBoardSize = width => this.setState({ boardSize: this.getBoardSize(width) });

    getBoardSize = width => {
        if (width >= 900) return 500;
        else if (width >= 768) return 400;
        return 200;
    }

    getDeviceWidth = () => window.innerWidth || document.body.clientWidth;

    updateComponent = (refresher = null) => refresher && this.setState({ refresher });

    render = () => {
        let cells = [];
        const deviceWidth = this.getDeviceWidth();
        for (let i = 0; i < this.state.boardSize; i++) cells.push(<BoardCell key={`cell-${i}`} />);

        return <Page shouldComponentUpdate={this.updateComponent}>
            <div className={classes.boardWrapper}>
                {deviceWidth < 768 && <div className={classes.infoText}>
                    If you are viewing this on mobile phone or tablet device, then hovering over the cell won't be possible.
                </div>}
                <div className={classes.board}>
                    {cells}
                </div>
            </div>
        </Page>;
    }
}