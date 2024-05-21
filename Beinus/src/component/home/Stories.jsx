import Story from './Story'
import './Home.css'
import React, {useState, useEffect} from "react"

function Posts() {

    const [stories, setStories] = useState([]);
    const [likedStories, setLikedStories] = useState([]);
    
    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
      
        fetch('http://localhost:8080/api/stories/get-all', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        })
        .then((response) => response.json())
        .then((data) => setStories(data))
        .catch((error) => console.error('Error fetching data:', error));

        
        fetch('http://localhost:8080/api/stories/' + localStorage.getItem('user_id') + '/likedStories', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        })
        .then((response) => response.json())
        .then((data) => setLikedStories(data))
        .catch((error) => console.error('Error fetching data:', error));
      }, []);
    
    const tmpStory = {
        id: 1,
        title: "AI 경쟁서 밀린 美 빅테크들 ‘새 수익원 찾기’ 골몰",
        content: "자율주행 전기차 포기한 애플\n가정용 모바일 로봇 개발 추진\n\n‘2인자’ 구글 AI 제미나이 적용\n프리미엄 서비스 유료화 검토\n\n테슬라, 실적 부진에 주가 추락\n中 점유율 10%→6%대로 축소",
        likes: 3395,
        userName: "CNN"
    }

    return(
        <div className='posts'>
            {stories.reverse().map(story => (
                <Story key={story.id} story={story} liked={likedStories.some(likedStory => likedStory.id === story.id)}/>
            )).reverse()}
            <Story key={tmpStory.id} story={tmpStory}></Story>
        </div>
    )
}

export default Posts