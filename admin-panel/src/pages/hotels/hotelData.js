export const hotelCreateForm = [
    {
        id: 1,
        htmlFor: "name",
        type: "text",
        required: true,
        // setState: (event) => setName(event.target.value),
    },
    {
        id: 2,
        htmlFor: "type",
        type: "text",
        required: true,
    },
    {
        id: 3,
        htmlFor: "city",
        type: "text",
        required: true,
    },
    {
        id: 4,
        htmlFor: "address",
        type: "text",
        required: true,
    },
    {
        id: 5,
        htmlFor: "distance",
        type: "text",
        required: true,
    },
    {
        id: 6,
        htmlFor: "photos",
        type: "file",
        accept: "image/*",
        required: false,
    },
    {
        id: 7,
        htmlFor: "title",
        type: "text",
        required: true,
    },
    {
        id: 8,
        htmlFor: "desc",
        type: "text",
        required: true,
    },
    {
        id: 9,
        htmlFor: "rating",
        type: "number",
        min: 0,
        max: 5,
        required: false,
    },
    {
        id: 10,
        htmlFor: "rooms",
        type: "text",
        required: false,
    },
    {
        id: 11,
        htmlFor: "cheapestPrice",
        type: "number",
        required: true,
    },
    {
        id: 12,
        htmlFor: "featured",
        type: "boolean",
        required: false,
    },
];

export const inputTag = (input, state, handleOnChange) => {
    switch (input.htmlFor) {
        case "rating":
            return (
                <input
                    name={input.htmlFor}
                    type={input.type}
                    required={input.required}
                    min={input.min}
                    max={input.max}
                    onChange={handleOnChange}
                    value={state[input.htmlFor]}
                />
            );
        case "photos":
            return (
                <input
                    name={input.htmlFor}
                    type={input.type}
                    required={input.required}
                    accept={input.accept}
                    onChange={handleOnChange}
                    file={state[input.htmlFor]}
                    multiple
                />
            );
        default:
            return (
                <input
                    name={input.htmlFor}
                    type={input.type}
                    required={input.required}
                    onChange={handleOnChange}
                    value={state[input.htmlFor]}
                />
            );
    }
};
