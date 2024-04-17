import { useState } from "react"
import './Customize.css'

function Customize() {

    // fetch("http://localhost:8080/api/user/Alice113", {
    //     method: 'GET', // HTTP method for getting data
    //     headers: { 'Content-Type': 'application/json' }, // Set the content type
    //     body: JSON.stringify(data), // Convert data to JSON string
    // }).then(() => {

    // })
    
    const [isLogined, setIsLogined] = useState(false);
    const [color, setColor] = useState()

    return(
        <div className="customize-block">
            <h1>This is Customize page</h1>
            <div className="profile-block">

                <div className="profile-item">
                    Image
                    <input/>
                </div>

                <div className="profile-item">
                    ID
                    <input/>
                </div>


                <div className="profile-item">
                    Name
                    <input/>
                </div>

                <div className="profile-item">
                    Password
                    <input/>
                </div>

                <div className="profile-item">
                    Color
                    <input/>
                </div>
                
                <div className="profile-item">
                    Intro
                    <input/>
                </div>
            </div>
            
            <div className="save-button-block">
                <button className="save-button" type='button'>
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