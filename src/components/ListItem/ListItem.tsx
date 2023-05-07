import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = () => {
  return (
    <div role="list-item" className="flex px-4 py-2">
      <div className="flex-grow">
        <div className="p-1">Washing Up Liquid</div>
        <div className="flex">
          <div className="p-1">
            <FontAwesomeIcon icon="weight-scale" size="xl" />
          </div>
          <div className="p-1">
            <input className="border-2 w-[300px]" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-1">
        <FontAwesomeIcon icon="heart" />
      </div>
    </div>
  );
};

export default ListItem;
