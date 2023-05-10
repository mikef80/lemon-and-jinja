import React from 'react';
import ListItem from '../ListItem/ListItem';
import ItemInput from '../ItemInput/ItemInput';

const items = [
  {
    id: 0,
    itemName: 'item1',
    itemWeight: 100,
    itemFavourite: false
  },
  {
    id: 1,
    itemName: 'item2',
    itemWeight: 100,
    itemFavourite: true
  },
];

const List = () => {
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