import React from 'react';
import ListItem from '../ListItem/ListItem';
import ItemInput from '../ItemInput/ItemInput';
import { useAppSelector } from '../../app/hooks';

const List = () => {
  const items = useAppSelector((state) => state.listState.items);

  return (
    <>
      <ItemInput />
      <ul>
        {items.map(item => {
          const { id, itemName, itemWeight, itemFavourite } = item;

          return <ListItem key={id} id={id} itemName={itemName} itemWeight={itemWeight} itemFavourite={itemFavourite} />;
        })}
      </ul>
    </>
  );
};

export default List;