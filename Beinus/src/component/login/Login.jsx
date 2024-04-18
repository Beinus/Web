import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {

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
        
        fetch("http://localhost:8080/api/user/" + id)
            .then((response) => response.json())
            .then((user) => {
                console.log(user)
        
                if (user?.userId === id && user?.userPassword === password) {
                    console.log("Valid")
                    navigate('/home')
                } else {
                    alert('Unvalid ID or password.(else)');
                }
            })
            .catch(() => alert('Unvalid ID or password.'));
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