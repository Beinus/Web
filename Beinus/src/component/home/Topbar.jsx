import './Home.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import {MenuIcon} from '@mui/icons-material/Menu';
import {IconButton} from '@mui/material';

function Topbar({onHamburgerClick}) {

    return(
        <div className='top-bar'>
            <nav className='top-bar-items'>
                <div className='left-side'>
                    <button className="hamburger-menu" onClick={onHamburgerClick}>Menu</button>
                    <img className='beinus-logo' src='/src/assets/Beinus logo colored.png'></img>
                    <Link to='/home' className='beinus-title'>
                        Beinus
                    </Link>
                </div>
                <ul>
                    <li className='active'>
                        <Link to="/home/add">Add</Link>
                    </li>
                    <li>
                        <Link to="/home/friends">Friends</Link>
                    </li>
                    <li>
                        <Link to="/home/customize">Customize</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Topbar