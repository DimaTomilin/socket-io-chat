import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatScreen from './comp/ChatScreen';
// import SignIn from './comp/SignIn';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<SignIn />} /> */}
        <Route path="/" element={<ChatScreen />} />
      </Routes>
    </Router>
  );
}
