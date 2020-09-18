import React from 'react';
import { BLACK, GREY_30, GREY_40, GREY_60, GREY_80, ORANGE_400, ORANGE_500, WHITE } from '../../../../resources/colors';
import { themed } from '../../../../utils/theme';

import classes from './styles.module.css';

export default class InputButton extends React.Component {

    render = () => {
        const { flex, buttonContent, position } = this.props;
        let buttonColor, textColor;

        switch(position) {
            case 'top':
                buttonColor = themed(GREY_40, GREY_60);
                textColor = themed(WHITE, BLACK);
                break

            case 'right':
                buttonColor = themed(ORANGE_500, ORANGE_400);
                textColor = themed(BLACK, WHITE);
                break;

            case 'center': default:
                buttonColor = themed(GREY_80, GREY_30);
                textColor = themed(BLACK, WHITE);
                break;
        }

        return <div className={classes.inputButton} style={{ flex: flex, backgroundColor: buttonColor, color: textColor }}>{buttonContent}</div>
    }
}