import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login({ logIn }) {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleIdChange(e) {
        setId(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleLogin() {
        const userData = {
            userId: id,
            userPassword: password
        }

        fetch("http://localhost:8080/api/v1/auth/authenticate", {
            method: 'POST', // HTTP method for adding data
            headers: { 'Content-Type': 'application/json' }, // Set the content type
            body: JSON.stringify(userData), // Convert data to JSON string
        })
            .then((response) => {
                if (response.status === 200) {
                    return response.json(); // Parse the response as JSON
                } else {
                    alert("Invalid ID or password");
                    throw new Error('Invalid ID or password');
                }
            })
            .then((data) => {
                if (data.token) {
                    alert('Login Successful!');
                    logIn(userData.userId); // Pass the userId to the logIn function
                    localStorage.setItem('access_token', data.token); // Store the token in localStorage
                    navigate('/home');
                } else {
                    alert("Invalid ID or password");
                }
            })
            .catch((error) => console.error('Error fetching data:', error));
    }

    return (
        <div className='login-screen'>

            <div className='logo-with-beinus'>
                <img src='/src/assets/Beinus logo colored.png' alt='beinus-logo' className='logo'></img>
                <h1 className='beinus'>Beinus</h1>
            </div>

            <div className='inputs'>
                <input value={id} onChange={handleIdChange} className='input-id' placeholder='ID' type='text'></input>
                <input value={password} onChange={handlePasswordChange} className='input-password' placeholder='PASSWORD' type='password'></input>
            </div>

            <div className='login-screen-buttons'>
                <button className='login-button' type='submit' onClick={handleLogin}>
                    LOGIN
                </button>

                <button className='signup-button' type='submit' onClick={() => navigate('/signup')}>
                    SIGN UP
                </button>
            </div>

        </div>
    )
}

export default Login