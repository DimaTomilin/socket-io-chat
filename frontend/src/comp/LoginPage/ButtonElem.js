import React from 'react';

export default function ButtonElem({ name, onClick }) {
  return (
    <div className="group">
      <button onClick={onClick} className="button">
        {name}
      </button>
    </div>
  );
}
