import "./create-hotels.css";
import React, { useEffect, useState } from "react";
import { hotelCreateForm, inputTag } from "./hotelData";
import { hotelFetch } from "../../fetch/hotel";

const CreateHotels = () => {
    const [formData, setFormData] = useState({
        name: "",
        type: "",
        city: "",
        address: "",
        distance: "",
        photos: [],
        title: "",
        desc: "",
        rating: "",
        rooms: "",
        cheapestPrice: "",
        featured: "",
    });
    const [show, setShow] = useState(false);

    const hotel = new hotelFetch();
    const handleOnChange = (event) => {
        if (event.target.name === "photos") {
            // console.log(Array.prototype.slice.call(event.target.files));
            // console.log(event.target.files[0]);
        }

        const { name, value } =
            event.target.name === "photos"
                ? {
                      name: event.target.name,
                      //   value: event.target.files[0],
                      value: Array.prototype.slice.call(event.target.files),
                  }
                : event.target;

        setFormData((prevFormData) => {
            return { ...prevFormData, [name]: value };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData();
        for (const name in formData) {
            if (name === "photos") {
                for (let i = 0; i < formData[name].length; i++) {
                    data.append(`photos`, formData[name][i]);
                }
            } else {
                data.append(name, formData[name]);
            }
        }
        let newHotel = await hotel.createHotel(data);
        console.log("this is new hotel", newHotel);
    };

    // useEffect(() => console.log("useEffect", formData));

    return (
        <div id="createHotel">
            <form onSubmit={handleSubmit}>
                <div
                    style={{ height: `${show ? "556px" : 0}` }}
                    className={
                        show ? "showContainer show" : "showContainer hide"
                    }
                >
                    <div className="wrapper">
                        <div className="inputsContainer">
                            {hotelCreateForm.map((input) => (
                                <div className="inputContainer">
                                    <label htmlFor={input.htmlFor}>
                                        {input.htmlFor}
                                    </label>
                                    {inputTag(input, formData, handleOnChange)}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="wrapperBtn">
                    <button>create hotel</button>
                    <button
                        type="button"
                        onClick={() => {
                            setShow(!show);
                        }}
                    >
                        {show ? "hide" : "show"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateHotels;
