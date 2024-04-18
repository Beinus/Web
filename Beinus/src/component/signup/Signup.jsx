import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

function Signup() {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const navigate = useNavigate();

    function handleIdChange(e) {
        setId(e.target.value)
    }

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handlePassword2Change(e) {
        setPassword2(e.target.value)
    }

    
    function handleSignup() {

        const data = {
            userId: id,
            userName: name,
            userPassword: password,
        }
        
        fetch("http://localhost:8080/api/user/save", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data),
        }).then(() => {
            navigate(-1)
        })
    }



    return (
        <div className='login-screen'>

            <div className='logo-with-beinus'>
                <img src='/src/assets/Beinus logo colored.png' alt='beinus-logo' className='logo'></img>
                <h1 className='beinus'>Beinus</h1>
            </div>

            <div className='inputs'>
                <input value={id} type='text' onChange={handleIdChange} className='input-id' placeholder='ID'></input>
                <input value={name} type='text' onChange={handleNameChange} className='input-name' placeholder='Nickname'></input>
                <input value={password} type='password' onChange={handlePasswordChange} className='input-password' placeholder='PASSWORD'></input>
                <input value={password2} type='password' onChange={handlePassword2Change} className='input-password' placeholder='PASSWORD check'></input>

                <button className='signup-button' type='submit' onClick={handleSignup}>
                    SIGN UP
                </button>
            </div>

        </div>
    )
}

export default Signup