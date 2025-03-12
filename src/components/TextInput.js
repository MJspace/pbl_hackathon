const TextInput = ({ placeholder, value, onChange }) => (
  <div>
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
  </div>
);

export default TextInput;
