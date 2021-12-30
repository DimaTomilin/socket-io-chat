import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../styles/chatStyles.scss';
import io from 'socket.io-client';

export default function ChatScreen() {
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    console.log('here');
    socketRef.current = io.connect('http://localhost:8080', {
      query: { name: localStorage.getItem('user') },
    });

    socketRef.current.on('messageBack', ({ name, content }) => {
      console.log({ name, content });
      setMessages((prevState) => {
        return [...prevState, { name, content }];
      });
    });

    socketRef.current.on('allUsers', ({ currentUsers }) => {
      console.log('allUsers');
      setUsers((prevState) => {
        const allUsers = prevState.concat(currentUsers);
        return [...allUsers];
      });
    });

    socketRef.current.on('newUser', ({ newUser }) => {
      console.log('newUser');
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
      <Header />
      <Main
        messages={messages}
        socket={socketRef}
        users={users}
        setMessages={setMessages}
      />
      <Footer />
    </div>
  );
}
