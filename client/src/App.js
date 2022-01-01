import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatScreen from './comp/ChatScreen';
import Authentication from './comp/LoginPage/Authentication';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>
    </Router>
  );
}
