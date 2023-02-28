import './Logo.css';
import React from 'react';
import github from './images/logos/github.png';
import linkedIn from './images/logos/linkedin.png';
import instagram from './images/logos/instagram.png';

function Logo(props) {

    return (

        <a href={props.link}>
            <img src={props.name === 'github' ? github
            : props.name === 'linkedin' ? linkedIn
            : props.name === 'instagram' ? instagram
            : null} alt='github logo' className='logo'></img>
        </a>
    );
}

export default Logo;