import React from "react";
import { hotelFetch } from "../../fetch/hotel";
import CreateHotels from "./CreateHotels";

const Hotels = () => {
    let hotel = new hotelFetch();
    return (
        <div className="flex-[4] mx-5">
            <CreateHotels />
            <CreateHotels />
        </div>
    );
};

export default Hotels;
