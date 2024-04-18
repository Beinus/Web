import { useState } from 'react'
import './Add.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Story() {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    function handleTitleChange(event) {
        setTitle(event.target.value)
    }

    function handleContentChange(event) {
        setContent(event.target.value)
    }

    function handleUpload(event) {
        event.preventDefault();

        const updatedContent = content.replace(/<br\s*\/?>/ig, '\n');
        setContent(updatedContent);
        
        const data = {
            userName: "Administrator",
            title,
            content: updatedContent,
            likes: 999999
        }

        setIsLoading(true);

        fetch("http://localhost:8080/api/stories/save", {
            method: 'POST', // HTTP method for adding data
            headers: { 'Content-Type': 'application/json' }, // Set the content type
            body: JSON.stringify(data), // Convert data to JSON string
        }).then(() => {
            console.log('added');
            setIsLoading(false);
            navigate('/home')
        })
    }
    
    return(
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
            <div className='add'>
                <h2 className='add-intro'>This is the Add page!</h2>
                <div className='input'>
                    
                    <input
                        className='input-title'
                        value={title}
                        onChange={handleTitleChange}
                        placeholder='Title'/>

                    <textarea
                        className='input-content'
                        value={content}
                        onChange={handleContentChange}
                        placeholder='Content'/>

                </div>
                <div className='button'>

                    { !isLoading && 
                        <Button
                            variant='contained'
                            onClick={
                                title && content ? handleUpload : () => alert('Please fill the title and content!')
                            }
                        >Upload</Button>
                    }
                    { isLoading && <Button variant='contained'>Uploading...</Button> }

                </div>
            </div>
        </div>
    )
}

export default Story