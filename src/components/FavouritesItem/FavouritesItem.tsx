import React, { MouseEventHandler, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateItem, deleteItem, updateDBItem, addToList, incrementCount } from "../List/listSlice";
import { Item } from "../../db/db";
// import { addToActiveList } from "../Favourites/favouritesSlice";

const FavouritesItem = (props: {
  key: number;
  itemId: number;
  name: string;
  favourite: boolean;
}) => {

  const { itemId, name, favourite } = props;
  const displayFavourite = favourite ? "fas" : "far";

  const dispatch = useAppDispatch();
  const selected = useAppSelector(
    (state) => state.listState.items.filter((item) => item.itemId === itemId)[0]
  );
  const count = useAppSelector((state) => state.listState.itemCount);

  const updateItemDetails = (e: any) => {      
    // dispatch(addToActiveList(e.target.value));
    // dispatch(updateDBItem({ ...selected, favourite: !favourite }));
  }

  const addtoListHandler = (e: any) => {
    console.log('add to list');
    const submission = {
      itemId: count,
      name,
      weight: 0,
      favourite,
    };

    dispatch(addToList(submission));
    dispatch(incrementCount());
  }

  return (
    <li
      id={itemId.toString()}
      role="list-item"
      className="flex px-4 pb-4 pt-3 border-b-[1px]"
    >
      <div className="pr-6 flex-grow">
        <div className="flex-grow text-lg">{name}</div>
      </div>
      <div className="flex justify-center items-center pr-6">
        <FontAwesomeIcon
          id="itemFavToggle"
          onClick={updateItemDetails}
          icon={[displayFavourite, "heart"]}
          size="2xl"
        />
      </div>
      <div className="flex justify-center items-center">
        <FontAwesomeIcon onClick={addtoListHandler} icon="plus" size="2xl" />
      </div>
    </li>
  );
};

export default FavouritesItem;
