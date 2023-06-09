import React, { useEffect } from 'react';
import FavouritesItem from '../FavouritesItem/FavouritesItem';
import ItemInput from '../ItemInput/ItemInput';
import { useAppSelector, useAppDispatch } from '../../app/hooks';


const Favourites = () => {
  const items = useAppSelector((state) => state.listState.items);
  const dbLoaded = useAppSelector((state) => state.listState.dbLoaded);
  const state = useAppSelector(state => state.listState);
  const dispatch = useAppDispatch();

  return (
    <>
      {dbLoaded ?
        <ul>
          {items.map(item => {
            if (item.favourite) {
              const { itemId, name, weight, favourite } = item;

            return <FavouritesItem key={itemId} itemId={itemId} name={name} weight={weight} favourite={favourite} />;
            }
          })}
        </ul>
        :
        <p>Loading items...</p>}
    </>
  );
};

export default Favourites;