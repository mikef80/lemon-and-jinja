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
          const { itemId, name, weight, favourite } = item;

          return <ListItem key={itemId} itemId={itemId} name={name} weight={weight} favourite={favourite} />;
        })}
      </ul>
    </>
  );
};

export default List;