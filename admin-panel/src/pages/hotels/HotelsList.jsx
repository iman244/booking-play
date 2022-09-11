import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HotelsList = ({ registeredHotels }) => {
    console.log(registeredHotels);

    const [image, setImage] = useState();
    useEffect(() => {
        const base64string = btoa(
            String.fromCharCode(
                ...new Uint8Array(registeredHotels[1].photos[0].data.data)
            )
        );
        console.log(base64string);
    }, []);
    return (
        <div>
            {image && <img src={`data:image/png;base64,${image}`} alt="" />}
        </div>
    );
};

export default HotelsList;
