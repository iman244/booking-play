import "./create-hotels.css";
import React, { useState } from "react";
import { useEffect } from "react";
import { hotelCreateForm, inputTag } from "./hotelData";
import { hotelFetch } from "../../fetch/hotel";

const CreateHotels = () => {
    const [formData, setFormData] = useState({});
    const [show, setShow] = useState(true);

    const hotel = new hotelFetch();
    const handleOnChange = (event) => {
        const { name, value } =
            event.target.name === "photos"
                ? { name: event.target.name, value: event.target.files }
                : event.target;

        setFormData((prevFormData) => {
            return { ...prevFormData, [name]: value };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData();
        for (const name in formData) {
            console.log(name);
            data.append(name, formData[name]);
        }
        let newHotel = await hotel.createHotel(data);
        console.log("this is new hotel", newHotel);
    };

    useEffect(() => console.log("useEffect", formData));

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
