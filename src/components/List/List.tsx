import React, { useEffect } from 'react';
import ListItem from '../ListItem/ListItem';
import ItemInput from '../ItemInput/ItemInput';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { setDBItems } from './listSlice';

const List = () => {
  const items = useAppSelector((state) => state.listState.items);
  const dbLoaded = useAppSelector((state) => state.listState.dbLoaded);
  const state = useAppSelector(state => state.listState);
  const dispatch = useAppDispatch();

  return (
    <>
      <ItemInput />
      {dbLoaded ?
        <ul>
        {items.map(item => {
          const { itemId, name, weight, favourite } = item;

          return <ListItem key={itemId} itemId={itemId} name={name} weight={weight} favourite={favourite} />;
        })}
        </ul>
        :
        <p>Loading items...</p>}
    </>
  );
};

export default List;