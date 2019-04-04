import React from 'react';

const carCard = (props) => {
    return (
        <div>
            <p>{props.make}</p>
            <p>{props.model}</p>
        </div>
    )
}

export default carCard;