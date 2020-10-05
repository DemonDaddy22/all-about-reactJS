import React from 'react';
import classes from './styles.module.css';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import { copyTextToClipboard } from '../../../../utils';

export default class ColorCard extends React.Component {

    onClickCopy = (e) => {
        e.stopPropagation();
        copyTextToClipboard(this.props.colour);
    }

    render = () => {

        return <div className={classes.card} style={{ backgroundColor: this.props.colour }} onClick={() => this.props.handleColourChange(this.props.colour)}>
            <div className={classes.copy}>
                <span className={classes.code}>{this.props.colour}</span>
                <div className={classes.icon} onClick={this.onClickCopy}>
                    <FileCopyOutlinedIcon fontSize='small' />
                </div>
            </div>
        </div>;
    }
}