import React, { MouseEventHandler } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { updateItemFavourite, updateItem } from "../List/listSlice";

const ListItem = (props: {
  key: number;
  id: number;
  itemName: string;
  itemWeight: number;
  itemFavourite: boolean;
}) => {
  const { id, itemName, itemWeight, itemFavourite } = props;
  const favourite = itemFavourite ? "fas" : "far";

  const dispatch = useAppDispatch();
  const selected = useAppSelector((state) => state.listState.items[id]);

  const updateFavourite = (e: any) => {
    dispatch(updateItemFavourite(selected));
  };

  const updateItemWeight = (e: any) => {
    e.preventDefault();
    const id =
      e.target[0].parentNode.parentNode.parentNode.parentNode.parentNode.id;
    const payloadObj = {
      id: id,
      value: e.target[0].value,
    };
    dispatch(updateItem(payloadObj));
  };

  return (
    <li
      id={id.toString()}
      role="list-item"
      className="flex px-4 pb-4 pt-3 border-b-[1px]"
    >
      <div className="pr-2 flex-grow">
        <div>{itemName}</div>
        <div className="flex">
          <div className="pr-2">
            <FontAwesomeIcon icon="weight-scale" size="xl" />
          </div>
          <div className="flex-grow">
            <form onSubmit={updateItemWeight}>
              <input
                name="numberOfItem"
                type="number"
                className="border-2 w-full"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <FontAwesomeIcon
          onClick={updateFavourite}
          icon={[favourite, "heart"]}
          size="2xl"
        />
      </div>
    </li>
  );
};

export default ListItem;
