import React from 'react'
import ListItem from '../ListItem/ListItem'
import { RootState } from '../../app/store';
import { useSelector } from 'react-redux';

const List = () => {
  const itemsArray = useSelector((state: RootState) => state.listState.listItems);

  return (
    <ul>
      {itemsArray.map(item => { 
        const { id, itemName, itemWeight, itemFavourite } = item;
        return <ListItem id={id} itemName={itemName} itemWeight={itemWeight} itemFavourite={itemFavourite} /> 
      })}
    </ul>
  )
}

export default List