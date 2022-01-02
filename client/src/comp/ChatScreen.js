import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../styles/chatStyles.scss';
import io from 'socket.io-client';

export default function ChatScreen() {
  const [currentUser] = useState(localStorage.getItem('user'));
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [privateReceiver, setPrivateReceiver] = useState('');
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io.connect('http://localhost:8080', {
      query: { name: currentUser },
    });

    socketRef.current.on('messageBack', (message) => {
      setMessages((prevState) => {
        const newState = prevState.slice(0, prevState.length - 1);
        return [...newState, { ...message }];
      });
    });

    socketRef.current.on('typingBack', (message) => {
      setMessages((prevState) => {
        if (prevState.length === 0) {
          return [...prevState, { ...message }];
        } else if (
          prevState[prevState.length - 1].content.includes('is typing...')
        ) {
          return [...prevState];
        } else {
          return [...prevState, { ...message }];
        }
      });
    });

    socketRef.current.on('allUsers', ({ currentUsers }) => {
      setUsers((prevState) => {
        const allUsers = prevState.concat(currentUsers);
        return [...allUsers];
      });
    });

    socketRef.current.on('userDisconnect', ({ name, content }) => {
      setMessages((prevState) => {
        return [...prevState, { content }];
      });
      setUsers((prevState) => {
        const newUsers = prevState.filter((user) => user.name !== name);
        return [...newUsers];
      });
    });

    socketRef.current.on('newUser', ({ newUser }) => {
      setMessages((prevState) => [
        ...prevState,
        { content: `${newUser.name} connected to chat` },
      ]);
      setUsers((prevState) => {
        return [...prevState, { ...newUser }];
      });
    });

    return () => {
      localStorage.clear();
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <div className="chat-page">
      <Header socket={socketRef} currentUser={currentUser} />
      <hr />
      <Main
        messages={messages}
        socket={socketRef}
        users={users}
        setMessages={setMessages}
        privateReceiver={privateReceiver}
        setPrivateReceiver={setPrivateReceiver}
        currentUser={currentUser}
      />
      <hr />
      <Footer />
    </div>
  );
}
