import React from 'react';

const InputElem = React.forwardRef(({ name, id, type }, ref) => {
  return (
    <div className="group">
      <label for={id} className="label">
        {name}
      </label>
      <input ref={ref} id={id} type={type} className="input" />
    </div>
  );
});

export default InputElem;
