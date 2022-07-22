import { fetchData } from "./fetch";

export class hotelFetch {
    uri = "http://localhost:3000/hotels";
    createHotel(body) {
        const data = fetchData(this.uri + "/admin/create", "POST", body);
        return data;
    }

    updateHotel(id, body) {
        const data = fetchData(this.uri + `/admin/${id}`, "POST", body);
        return data;
    }

    deleteHotel(id) {
        const data = fetchData(this.uri + `/admin/${id}`, "DELETE");
        return data;
    }

    HotelRooms(id) {
        const data = fetchData(this.uri + `/rooms/${id}`, "GET");
        return data;
    }

    HotelInformation(id) {
        const data = fetchData(this.uri + `/${id}`, "GET");
        return data;
    }

    HotelSummaries() {
        const data = fetchData(this.uri + `/summary`, "GET");
        return data;
    }

    qHotels(type, city) {
        return `return ${type} hotels in ${city}`;
    }
}
