import React, { useState } from 'react';

export default function OnlineIndicator({ isOnline }) {
  const [status, setStatus] = useState(isOnline);
  let symbol;
  if (status) {
    symbol = '🟢';
  } else {
    symbol = '🔘';
  }
  return <span>{symbol}</span>;
}
