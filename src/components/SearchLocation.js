import React, { useState } from 'react';

const SearchLocation = () => {
  const [input, setInput] = useState('');
  const onFormChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <input type="text" value={input} onChange={onFormChange} />
    </div>
  );
};

export default SearchLocation;
