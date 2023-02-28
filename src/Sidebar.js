import './Sidebar.css';
import React from 'react';
import homeIcon from './images/home.png';
import userIcon from './images/user.png';
import contactIcon from './images/paper-plane.png';
import homeIconFill from './images/homeFill.png';
import userIconFill from './images/userFill.png';
import contactIconFill from './images/paper-planeFill.png';
import nickyPic from './images/nicky.png';
import { appContext } from './App';

function SidebarNav() {

    const { pageState, setPageState } = React.useContext(appContext);
    const handleHome = () => setPageState([true, false, false]);
    const handleUser = () => setPageState([false, true, false]);
    const handleContact = () => setPageState([false, false, true]);

    return (
        <div id="Sidebar Nav" className='Sidebar'>
            <img src={nickyPic} alt='pic of Nicky' className='NickyPic'></img>
            <nav>
                <button id="Home Button" onClick={handleHome}>
                    <img src={pageState[0] ? homeIconFill : homeIcon} alt='home icon'></img>
                </button>
                <button id="User Button" onClick={handleUser}>
                    <img src={pageState[1] ? userIconFill : userIcon} alt='user icon'></img>
                </button>
                <button id="Contact Button" onClick={handleContact}>
                    <img src={pageState[2] ? contactIconFill : contactIcon} alt='contact icon'></img>
                </button>
            </nav>
        </div>
    )
}

export default SidebarNav;