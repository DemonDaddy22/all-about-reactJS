import React from 'react';

import './index.css';

export default class Label extends React.Component {

    render = () => {
        const { label, style } = this.props;

        return <div className='label' style={style}>{label}</div>
    }
}
