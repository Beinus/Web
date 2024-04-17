import React, { useState } from 'react'
import Home from './component/home/Home'
import Login from './component/login/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home/*' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
