import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = (props: {id: number, itemName: string, itemWeight: number, itemFavourite: boolean}) => {
    const favourite = props.itemFavourite ? "fas" : "far";
  
    return (
    <li role="list-item" className="flex px-4 pb-4 pt-3 border-b-[1px]">
      <div className="pr-2 flex-grow">
        <div className="">{props.itemName}</div>
        <div className="flex">
          <div className="pr-2">
            <FontAwesomeIcon icon="weight-scale" size="xl" />
          </div>
          <div className="flex-grow">
            <input type="number" className="border-2 w-full" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <FontAwesomeIcon icon={[favourite,"heart"]} size='2xl' />
      </div>
    </li>
  );
};

export default ListItem;
