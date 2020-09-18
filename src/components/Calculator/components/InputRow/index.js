import React from 'react';
import InputButton from '../InputButton';

import classes from './styles.module.css';

export default class extends React.Component {

    render = () => {
        const { row, index } = this.props;

        return <>
            {row.map((entry, i) => <InputButton key={`button-${index}-${i}`} flex={entry.flex} buttonContent={entry.buttonContent} position={entry.position} />)}
        </>;
    }
}