import React, { ChangeEvent, FormEvent, useState } from 'react';

const ItemInput = () => {
  const [input, setInput] = useState('');

  const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const submitInput = (e: FormEvent) => {
    e.preventDefault();
    
  };

  return (
    <div>
      <form onSubmit={submitInput} className='w-full h-10'>
        <input type="text" placeholder='Enter new item...' className='w-full border-x-2 border-b-2 h-full px-4' onChange={updateInput} />
      </form>
    </div>
  );
};

export default ItemInput;