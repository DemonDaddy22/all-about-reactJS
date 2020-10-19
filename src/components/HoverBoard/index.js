import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import BoardCell from './components/BoardCell';

const BOARD_SIZE = 300;

export default class HoverBoard extends React.Component {

    updateComponent = (refresher = null) => refresher && this.setState({ refresher });

    render = () => {
        let cells = [];
        for (let i = 0; i < BOARD_SIZE; i++) cells.push(<BoardCell key={`cell-${i}`} />);

        return <Page shouldComponentUpdate={this.updateComponent}>
            <div className={classes.boardWrapper}>
                <div className={classes.board}>
                    {cells}
                </div>
            </div>
        </Page>;
    }
}