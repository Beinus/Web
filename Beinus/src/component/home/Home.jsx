import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './Home.css'
import Topbar from './Topbar'
import Leftbar from './Leftbar'
import Stories from './Stories'
import Add from '../add/Add'
import Friends from './Friends';
import Customize from '../customize/Customize';

function Home() {

    const [isLeftbarVisible, setIsLeftbarVisible] = useState(false);

    const handleMenuClick = () => {
        setIsLeftbarVisible(!isLeftbarVisible);
        console.log(isLeftbarVisible)
    }

    return (
        <div>
            <Topbar onHamburgerClick={handleMenuClick}></Topbar>
            <div className="below-topbar">
                <Leftbar isLeftbarVisible={isLeftbarVisible}></Leftbar>
                <div className='stories' style={{flex: 1}}>
                    <Routes>
                        <Route path="/" element={<Stories/>}/>
                        <Route path="/add" element={<Add />}/>
                        <Route path="/friends" element={<Friends/>}/>
                        <Route path="/customize" element={<Customize/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Home