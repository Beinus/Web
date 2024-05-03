import { useEffect, useState } from "react"
import './Customize.css'

function Customize() {

    const userId = localStorage.getItem('user_id').replace(/"/g, '')
    
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userImage, setUserImage] = useState('')
    const [userColor, setUserColor] = useState('#FFFFFF')
    const [userIntro, setUserIntro] = useState('')


    function handleNameChange(e) {
        setUserName(e.target.value)
    }

    function handlePasswordChange(e) {
        setUserPassword(e.target.value)
    }

    function handleImageChange(e) {
        setUserImage(e.target.value)
    }

    function handleColorChange(e) {
        setUserColor(e.target.value)
    }

    function handleIntroChange(e) {
        setUserIntro(e.target.value)
    }

    

    function handleSaveInfo() {
        fetch("http://localhost:8080/api/user/" + userId, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' }, // Set the content type
            body: JSON.stringify({
                userName: userName,
                userImage: userImage,
                userColor: userColor,
                userIntro: userIntro
            })
        })
        .then(alert("Saved!"))
    }

    useEffect(() => {
        fetch("http://localhost:8080/api/user/" + userId, {
            method: 'GET', // HTTP method for getting data
            headers: { 'Content-Type': 'application/json' }, // Set the content type
        }).then((response) => response.json())
            .then((data) => {
                setUserImage(data.userImage)
                setUserName(data.username)
                setUserPassword(data.userPassword)
                setUserColor(data.userColor)
                setUserIntro(data.userIntro)
            })
    }, [])


    return (
        <div className="customize-block">
            <h1>This is Customize page</h1>
            <div className="profile-block">

                <div className="profile-item">
                    Image
                    <input value={userImage} onChange={handleImageChange} placeholder="Put your profile Image"/>
                </div>

                <div className="profile-item">
                    ID
                    <input value={userId} readOnly/>
                </div>


                <div className="profile-item">
                    Name
                    <input value={userName} onChange={handleNameChange} placeholder="Create your nickname"/>
                </div>

                <div className="profile-item">
                    Password
                    <input value={userPassword} readOnly/>
                </div>

                <div className="profile-item">
                    Color
                    <input type="color" value={userColor} onChange={handleColorChange}/>
                </div>

                <div className="profile-item">
                    Intro
                    <input value={userIntro} onChange={handleIntroChange} placeholder="Write about yourself"/>
                </div>
            </div>

            <div className="save-button-block">
                <button className="save-button" type='button' onClick={handleSaveInfo}>
                    SAVE
                </button>
            </div>

            <div className='logout-and-delete-buttons'>
                <button className='logout-button' type='submit'>
                    LOGOUT
                </button>

                <button className='delete-account-button' type='submit'>
                    DELETE ACCOUNT
                </button>
            </div>
        </div>
    )
}

export default Customize