import React from 'react';

const TextInput = ({ placeholder, value, onChange, isTextarea }) => {
  console.log('value:', value);

  return (
    <div>
      {isTextarea ? (
        <textarea
          style={{
            width: '350px',
            height: '50px',
            fontSize: '17px',
            paddingLeft: '10px',
            paddingTop: '10px',
          }}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : (
        <input
          style={{
            width: '350px',
            height: '50px',
            fontSize: '17px',
            paddingLeft: '10px',
          }}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default TextInput;
