import React from 'react';

function Input(props) {
  const { label, ...rest } = props;

  return (
    <div>
      <label>
        {label}
        <input {...rest} />
      </label>
    </div>
  );
}

export default Input;
