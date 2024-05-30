import { useEffect, useState } from "react"

function Friends() {

    const [requests, setRequests] = useState([]);
    const [requested, setRequested] = useState([]);
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/follows/get/" + localStorage.getItem("user_id"), {
            method: 'GET', // HTTP method for getting data
            headers: { 'Content-Type': 'application/json' }, // Set the content type
        })
        .then((response) => response.json())
        .then((data) => {
            setRequests(data.filter(item => item.state == "Requested" && item.user2 == localStorage.getItem("user_id")))
            setRequested(data.filter(item => item.state == "Requested" && item.user1 == localStorage.getItem("user_id")))
            setFriends(data.filter(item => item.state == "Friends"))
        })
    }, [])

    return(
        <div>
            <h1>This is Friends page.</h1>
            <h3>Follow Requests</h3>
            {requests.reverse().map(item => (
                <div key={item.id} className="profile-brief">
                    <div className="profile-brief-image-and-name">
                        <img src="/src/assets/Beinus Logo White 1x.png" width={"10%"} alt="Profile"/>
                        <p className="profile-brief-name">{item.user1}</p>
                    </div>
                    <button className="profile-brief-button">Accept</button>
                </div>
            ))}
            <h3>Follow Requested</h3>
            {requested.reverse().map(item => (
                <div key={item.id} className="profile-brief">
                    <div className="profile-brief-image-and-name">
                        <img src="/src/assets/Beinus Logo White 1x.png" width={"10%"} alt="Profile"/>
                        <p className="profile-brief-name">{item.user2}</p>
                    </div>
                    <button className="profile-brief-button">Requested</button>
                </div>
            ))}
            <h3>Friends</h3>
            {friends.reverse().map(item => (
                <div key={item.id} className="profile-brief">
                    <div className="profile-brief-image-and-name">
                        <img src="/src/assets/Beinus Logo White 1x.png" width={"10%"} alt="Profile"/>
                        <p className="profile-brief-name">{item.user1 === localStorage.getItem('user_id') ? item.user2 : item.user1}</p>
                    </div>
                    <button className="profile-brief-button">Friends</button>
                </div>
            ))}
        </div>
    )
}

export default Friends