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
                    <a href='/' className='beinus-title'>
                        Beinus
                    </a>
                </div>
                <ul>
                    <li className='active'>
                        <Link to="/Add">Add</Link>
                    </li>
                    <li>
                        <Link to="/Friends">Friends</Link>
                    </li>
                    <li>
                        <Link to="/Customize">Customize</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Topbar