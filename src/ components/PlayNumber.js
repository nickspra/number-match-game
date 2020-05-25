import React from 'react';

const PlayNumber = props => (
    <button className={`c-number ${props.status}` } onClick = {() => props.onClick(props.number, props.status)}>
        <span>{props.number}</span>
    </button>
);

export default PlayNumber;