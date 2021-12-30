import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../styles/chatStyles.scss';

export default function ChatScreen() {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  const getUsers = async () => {
    const response = await axios.get(`http://localhost:8080/getUsers`);

    setCurrentUsers(response.data);
  };

  useEffect(() => {
    getUsers();
    const source = new EventSource('http://localhost:8080/api/stream');

    source.onopen = function () {
      console.log('connection to stream has been opened');
    };
    source.onerror = function (error) {
      console.log('An error has occurred while receiving stream', error);
    };
    source.onmessage = function (event) {
      const data = JSON.parse(event.data);
      if (data.isOnline) {
        setCurrentUsers((prev) =>
          prev.concat([
            {
              username: data.username,
              isOnline: data.isOnline,
            },
          ])
        );
        setMessages((prev) =>
          prev.concat([
            {
              content: ` is connected to chat`,
              username: data.username,
              time: data.creatingTime,
            },
          ])
        );
        return;
      } else if (data.isOnline === false) {
        setCurrentUsers((prev) =>
          prev.filter((user) => user.username !== data.username)
        );
        setMessages((prev) =>
          prev.concat([
            {
              content: ` is disconect`,
              username: data.username,
              time: data.creatingTime,
            },
          ])
        );
        return;
      } else {
        setMessages((prev) =>
          prev.concat([
            {
              content: data.content,
              username: data.sender,
              time: data.creatingTime,
            },
          ])
        );
      }
      console.log('received stream', data);
    };
    source.onclose = function () {
      console.log('connection to stream has been closed');
    };
  }, []);

  return (
    <div className="chat-page">
      <Header />
      <Main currentUsers={currentUsers} messages={messages} />
      <Footer />
    </div>
  );
}
