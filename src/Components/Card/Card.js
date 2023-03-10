import React from 'react';
import './Card.css';

function Card(props) {

    return (
        <div className={props.className}>
            <img src={props.pic} alt={props.alt} className={props.picStyle === 'primary' ? 'primaryImage' : 'secondaryImage'}></img>
            <div className='textContainer'>
                {props.children}
            </div>
        </div>
    )
}

export default Card;