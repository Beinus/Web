import React, { useEffect, useState } from 'react'
import Home from './component/home/Home'
import Login from './component/login/Login'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Signup from './component/signup/Signup'

function App() {

    const [loggedUser, setLoggedUser] = useState(null)

    useEffect(() => {
        const storedUser = localStorage.getItem('loggedUser')
        if (storedUser) {
            setLoggedUser(JSON.parse(storedUser))
        }
    }, [])

    // Callback to set isLoggedIn to true (when user logs in)
    const logIn = (userId) => {
        setLoggedUser(userId)
        localStorage.setItem('loggedUser', JSON.stringify(userId))
    }

    // Callback to set isLoggedIn to false (when user logs out)
    const logOut = () => {
        setIsLoggedIn(false)
        localStorage.removeItem('loggedUser')
    }

    return (
        <BrowserRouter>
            <Routes>
                {/* Login route */}
                <Route path="/" element={<Login logIn={logIn} />} />
                {/* Signup route */}
                <Route path='/signup' element={<Signup/>}/>
                {/* Protected routes */}
                <Route path='/home/*' element={loggedUser ? <Home/> : <Navigate to="/" />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
