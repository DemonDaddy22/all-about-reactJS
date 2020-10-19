import React from 'react';

import classes from './styles.module.css';
import Page from '../../ui-components/Page';
import BoardCell from './components/BoardCell';

const BOARD_SIZE = 150;

export default class HoverBoard extends React.Component {

    render = () => {

        let cells = [];
        for (let i = 0; i < BOARD_SIZE; i++) cells.push(<BoardCell key={`cell-${i}`} />);

        return <Page>
            <div className={classes.boardWrapper}>
                <div className={classes.board}>
                    {cells}
                </div>
            </div>
        </Page>;
    }
}