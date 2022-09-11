import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { hotelFetch } from "../../fetch/hotel";
import CreateHotels from "./CreateHotels";
import HotelsList from "./HotelsList";

const Hotels = () => {
    const [registeredHotels, setRegisteredHotels] = useState();

    let hotel = new hotelFetch();
    let getHotel = async () => {
        let data = await hotel.Hotels();
        setRegisteredHotels(data);
    };
    useEffect(() => {
        getHotel();
    }, []);

    return (
        <div className="flex-[4] mx-5 flex flex-col gap-8">
            <CreateHotels />
            {registeredHotels && (
                <HotelsList registeredHotels={registeredHotels} />
            )}
        </div>
    );
};

export default Hotels;
