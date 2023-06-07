import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addToList, incrementCount } from '../List/listSlice';

const ItemInput = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.listState.items);
  const count = useAppSelector((state) => state.listState.itemCount);

  const [input, setInput] = useState('');

  const updateInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const submitInput = (e: FormEvent) => {
    e.preventDefault();

    const submission = {
      itemId: count,
      name: input,
      weight: undefined,
      favourite: false
    };

    dispatch(addToList(submission));
    dispatch(incrementCount());

    setInput('');

  };

  return (
    <div>
      <form onSubmit={submitInput} className='w-full h-10'>
        <input name='newItemInput' type="text" placeholder='Enter new item...' className='w-full border-x-2 border-b-2 h-full px-4' onChange={updateInput} value={input} />
      </form>
    </div>
  );
};

export default ItemInput;