import React, {useState, useEffect} from "react"
import './Home.css'

function Story(props) {

    const [color, setColor] = useState('#FFFFFF')
    const [heart, setHeart] = useState('🤍')
    const [likes, setLikes] = useState(props.story.likes)

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
        if (props.liked) {
            setHeart('❤️')
        }
    }, [props.story])

    const handleClick = () => {
        if (heart == '❤️') {
            setHeart('🤍')
            setLikes(likes - 1)
            fetch("http://localhost:8080/api/likes/remove", {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "userId": localStorage.getItem('user_id'),
                    "storyId": props.story.id
                })
            })
        } else {
            setHeart('❤️')
            setLikes(likes + 1)
            fetch("http://localhost:8080/api/likes/add", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "userId": localStorage.getItem('user_id'),
                    "storyId": props.story.id
                })
            })
        }
    }

    return(
        <div className="story-info" style={{border: "2px solid " + color, boxShadow: "0 0 16px " + color}}>
            <div className="story">
                <h3 className="story-title">{props.story.title}</h3>
                <p className="story-content">{props.story.content}</p>
                <div className="story-likes-and-userName">
                    <button className="story-likes" onClick={handleClick}>{heart} {likes}</button>
                    <p className="story-userName">{props.story.userId}</p>
                </div>
            </div>
        </div>
    )
}

export default Story