import React, { useEffect, useState } from "react";

function Friends() {
  const [requests, setRequests] = useState([]);
  const [requested, setRequested] = useState([]);
  const [friends, setFriends] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/follows/get/" + localStorage.getItem("user_id"), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        setRequests(data.filter((item) => item.state === "Requested" && item.user2 === localStorage.getItem("user_id")));
        setRequested(data.filter((item) => item.state === "Requested" && item.user1 === localStorage.getItem("user_id")));
        setFriends(data.filter((item) => item.state === "Friends"));
      });

    fetch("http://localhost:8080/api/user/get-all", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const accept = (user1, user2) => {
    fetch("http://localhost:8080/api/follows/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user1, user2, state: "Friends" }),
      })
        .then((response) => response.json())
        .then((newFriend) => {
          setRequests((prev) => prev.filter((item) => !(item.user1 === user1 && item.user2 === user2)));
          setFriends((prev) => [...prev, newFriend]);
        });
  };

  const remove = (user1, user2) => {
    fetch("http://localhost:8080/api/follows/delete", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user1, user2 }),
    }).then(() => {
      setRequests((prev) => prev.filter((item) => !(item.user1 === user1 && item.user2 === user2)));
      setRequested((prev) => prev.filter((item) => !(item.user1 === user1 && item.user2 === user2)));
      setFriends((prev) => prev.filter((item) => !(item.user1 === user1 && item.user2 === user2)));
    });
  };

  const request = (user1, user2) => {
    fetch("http://localhost:8080/api/follows/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user1, user2, state: "Requested" }),
    })
      .then((response) => response.json())
      .then((newRequest) => {
        setRequested((prev) => [...prev, newRequest]);
        setUsers((prev) => prev.filter((user) => user.userId !== user2));
      });
  };

  return (
    <div className="friends-screen">
      <div className="friends-list">
        <h2>Follow Requests</h2>
        <hr className="br-line" />
        {requests.reverse().map((item) => (
          <div key={item.id} className="profile-brief">
            <div className="profile-brief-image-and-name">
              <img src="/src/assets/Beinus Logo White 1x.png" alt="Profile" />
              <p className="profile-brief-name">{item.user1}</p>
            </div>
            <div className="profile-brief-buttons">
              <button className="profile-brief-button" onClick={() => accept(item.user1, item.user2)}>Accept</button>
              <button className="profile-brief-button" onClick={() => remove(item.user1, item.user2)}>Delete</button>
            </div>
          </div>
        ))}
        <br/>

        <h2>Follow Requested</h2>
        <hr className="br-line" />
        {requested.reverse().map((item) => (
          <div key={item.id} className="profile-brief">
            <div className="profile-brief-image-and-name">
              <img src="/src/assets/Beinus Logo White 1x.png" alt="Profile" />
              <p className="profile-brief-name">{item.user2}</p>
            </div>
            <div className="profile-brief-buttons">
              <button className="profile-brief-button" onClick={() => remove(item.user1, item.user2)}>Delete</button>
            </div>
          </div>
        ))}
        <br/>

        <h2>Friends</h2>
        <hr className="br-line" />
        {friends.reverse().map((item) => (
          <div key={item.id} className="profile-brief">
            <div className="profile-brief-image-and-name">
              <img src="/src/assets/Beinus Logo White 1x.png" alt="Profile" />
              <p className="profile-brief-name">
                {item.user1 === localStorage.getItem("user_id") ? item.user2 : item.user1}
              </p>
            </div>
            <div className="profile-brief-buttons">
              <button className="profile-brief-button" onClick={() => remove(item.user1, item.user2)}>Delete</button>
            </div>
          </div>
        ))}
        <br/>

        <h2>All Users</h2>
        <hr className="br-line" />
        {users
          .filter(
            (user) =>
              !requests.some((request) => request.user1 === user.userId || request.user2 === user.userId) &&
              !requested.some((req) => req.user1 === user.userId || req.user2 === user.userId) &&
              !friends.some((friend) => friend.user1 === user.userId || friend.user2 === user.userId)
          )
          .reverse()
          .map((user) => (
            <div key={user.userId} className="profile-brief">
              <div className="profile-brief-image-and-name">
                <img src={user.userImage || "/src/assets/Beinus Logo White 1x.png"} alt="Profile" />
                <p className="profile-brief-name">{user.userId}</p>
              </div>
              <div className="profile-brief-buttons">
                <button className="profile-brief-button" onClick={() => request(localStorage.getItem('user_id').replace(/"/g, ''), user.userId)}>Request</button>
              </div>
            </div>
          ))}
          <br/>
      </div>
    </div>
  );
}

export default Friends;
