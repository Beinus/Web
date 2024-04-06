import { useState } from "react"
import './Customize.css'

function Customize() {
    
    const [isLogined, setIsLogined] = useState(false);

    return(
        <div className="customize-block">
            <h1>This is Customize page</h1>
            <div className="profile-block">
                <div className="profile-name">
                    Name
                    <input/>
                </div>

                Intro
                <input/>
            </div>
        </div>
    )
}

export default Customize