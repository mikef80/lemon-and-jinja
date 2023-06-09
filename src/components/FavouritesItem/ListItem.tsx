import React, { MouseEventHandler, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateItem, deleteItem, updateDBItem } from "../List/listSlice";

const ListItem = (props: {
  key: number;
  itemId: number;
  name: string;
  weight: number;
  favourite: boolean;
}) => {
  // const [inputWeight, updateInputWeight] = useState(0);

  const { itemId, name, weight, favourite } = props;
  const displayFavourite = favourite ? "fas" : "far";

  const dispatch = useAppDispatch();
  const selected = useAppSelector(
    (state) => state.listState.items.filter((item) => item.itemId === itemId)[0]
  );

  const deleteItemHandler = (e: any) => {
    const itemId = Number(selected.itemId);
    dispatch(deleteItem({ itemId: itemId }));
  };

  const updateItemDetails = (e: any) => {      
    const eventID = e.target.id;    

    if (eventID === 'itemWeightInput') {      
      dispatch(updateItem({ ...selected, weight: Number(e.target.value) }));
      dispatch(updateDBItem({ ...selected, weight: Number(e.target.value) }));
    } else {
      dispatch(updateItem({ ...selected, favourite: !favourite }));
      dispatch(updateDBItem({ ...selected, favourite: !favourite }));
    }
  }

  return (
    <li
      id={itemId.toString()}
      role="list-item"
      className="flex px-4 pb-4 pt-3 border-b-[1px]"
    >
      <div className="pr-6 flex-grow">
        <div>{name}</div>
        <div className="flex">
          <div className="pr-2">
            <FontAwesomeIcon icon="weight-scale" size="xl" />
          </div>
          <div className="flex-grow">
            <input
              id='itemWeightInput'
              value={(weight === 0 ? '' : weight)}
              step="any"
              onChange={updateItemDetails}
              name="numberOfItem"
              type="number"
              className="border-2 w-full"
              placeholder='Enter weight...'
            />
          </div>
        </div>
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
        <FontAwesomeIcon onClick={deleteItemHandler} icon="x" size="2xl" />
      </div>
    </li>
    // <div>
    //   <p>n: {name}</p>
    //   <p>w: {weight}</p>
    //   <p>f: {favourite}</p>
    //   <p>id: {itemId}</p>
    // </div>
  );
};

export default ListItem;
