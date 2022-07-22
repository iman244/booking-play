export const fetchData = async (uri, method, body = "nodata") => {
    const response = await fetch(uri, {
        credentials: "include",
        method: method,
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
};
