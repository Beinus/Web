import React, {useState, useEffect} from "react"
import './Home.css'

function Story(props) {

    const [color, setColor] = useState('#FFFFFF')

    useEffect(() => {
        if (props.story && props.story.userId) {
            fetch("http://localhost:8080/api/user/" + props.story.userId, {
                method: 'GET', // HTTP method for getting data
                headers: { 'Content-Type': 'application/json' }, // Set the content type
            }).then((response) => response.json())
                .then((data) => {
                    setColor(data.userColor)
                })
        }
    }, [props.story])

    return(
        <div className="story-info" style={{border: "2px solid " + color, boxShadow: "0 0 16px " + color}}>
            <div className="story">
                <h3 className="story-title">{props.story.title}</h3>
                <p className="story-content">{props.story.content}</p>
                <div className="story-likes-and-userName">
                    <p className="story-likes">❤️ {props.story.likes}</p>
                    <p className="story-userName">{props.story.userId}</p>
                </div>
            </div>
        </div>
    )
}

export default Story