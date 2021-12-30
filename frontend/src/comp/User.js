import React from 'react';
import OnlineIndicator from './OnlineIndicator';

export default function User({ user }) {
  return (
    <div className="user">
      <OnlineIndicator isOnline={user.isOnline} />
      {user.username}
    </div>
  );
}
