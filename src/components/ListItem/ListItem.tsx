import React, { MouseEventHandler, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateItemFavourite, updateItem, deleteItem } from "../List/listSlice";

const ListItem = (props: {
  key: number;
  itemId: number;
  name: string;
  weight: number;
  favourite: boolean;
}) => {
  const [inputWeight, updateInputWeight] = useState(0);

  const { itemId, name, weight, favourite } = props;
  const displayFavourite = favourite ? "fas" : "far";

  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.listState.items.filter(item => item.itemId === itemId)[0]);

  const deleteItemHandler = (e: any) => {
    // DISPATCH DELETE ACTION HERE
    console.log(selected);
    const itemId = Number(selected.itemId);
    console.log(selected);

    dispatch(deleteItem({ itemId: itemId }));
  };

  const updateFavourite = (e: any) => {
    dispatch(updateItemFavourite(selected));
  };

  const updateWeight = (e: any) => {
    updateInputWeight(e.target.value);
  };

  const updateItemWeight = (e: any) => {
    e.preventDefault();
    const id =
      e.target[0].parentNode.parentNode.parentNode.parentNode.parentNode.id;
    const payloadObj = {
      itemId: id,
      value: e.target[0].value,
    };
    dispatch(updateItem(payloadObj));
  };

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
            <form onSubmit={updateItemWeight}>
              <input
                value={inputWeight}
                step="any"
                onChange={updateWeight}
                name="numberOfItem"
                type="number"
                className="border-2 w-full"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pr-6">
        <FontAwesomeIcon
          onClick={updateFavourite}
          icon={[displayFavourite, "heart"]}
          size="2xl"
        />
      </div>
      <div className="flex justify-center items-center">
        <FontAwesomeIcon onClick={deleteItemHandler} icon="x" size="2xl" />
      </div>
    </li>
  );
};

export default ListItem;
