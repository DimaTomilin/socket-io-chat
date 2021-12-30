import React, { useEffect, useState, useRef } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../styles/chatStyles.scss';
import io from 'socket.io-client';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {
    const name = prompt('What`s your name?', ['Username']);
    console.log('here');
    socketRef.current = io.connect('http://localhost:8080', {
      query: { name },
    });

    socketRef.current.on('messageBack', ({ name, content }) => {
      console.log({ name, content });
      setMessages((prevState) => {
        return [...prevState, { name, content }];
      });
    });

    return () => socketRef.current.disconnect();
  }, []);

  return (
    <div className="chat-page">
      <Header />
      <Main messages={messages} socket={socketRef} setMessages={setMessages} />
      <Footer />
    </div>
  );
}
