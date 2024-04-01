import Story from './Story'
import './Home.css'
import React, {useState, useEffect} from "react"

function Posts() {

    const [stories, setStories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/stories/get-all')
        .then((response) => response.json())
        .then((data) => setStories(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return(
        <div className='posts'>
            {stories.map(story => (
                <Story key={story.id} story={story}/>
            ))}
        </div>
    )
}

export default Posts