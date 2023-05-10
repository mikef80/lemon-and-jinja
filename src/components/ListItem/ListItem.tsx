import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ListItem = (props: { key: number, id: number, itemName: string, itemWeight: number, itemFavourite: boolean; }) => {
    const { id, itemName, itemWeight, itemFavourite } = props;
    const favourite = itemFavourite ? "fas" : "far";

    const updateFavourite = (e) => {
        console.log(e);
        
    }

    return (
        <li id={id.toString()} role="list-item" className="flex px-4 pb-4 pt-3 border-b-[1px]">
            <div className="pr-2 flex-grow">
                <div className="">{itemName}</div>
                <div className="flex">
                    <div className="pr-2">
                        <FontAwesomeIcon icon="weight-scale" size="xl" />
                    </div>
                    <div className="flex-grow">
                        <form action="">
                            <input name='numberOfItem' type="number" className="border-2 w-full" />
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center ">
                <FontAwesomeIcon icon={[favourite, "heart"]} size='2xl' onClick={updateFavourite} />
            </div>
        </li>
    );
};

export default ListItem;
