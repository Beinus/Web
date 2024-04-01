import React, {useState, useEffect} from "react"
import './Home.css'

function Story(props) {

    return(
        <div className="story-info">
            <div className="story">
                <h3 className="story-title">{props.story.title}</h3>
                <p className="story-content">{props.story.content}</p>
                <div className="story-likes-and-userName">
                    <p className="story-likes">❤️ {props.story.likes}</p>
                    <p className="story-userName">{props.story.userName}</p>
                </div>
            </div>
        </div>
    )
}

export default Story