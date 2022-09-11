import { fetchData, fetchDataGET, fetchDataPhoto } from "./fetch";

export class hotelFetch {
    uri = "http://127.0.0.1:3000/hotels";
    async createHotel(body) {
        const data = await fetchDataPhoto(
            this.uri + "/admin/create",
            "POST",
            body
        );
        console.log(data);
        return data;
    }

    async updateHotel(id, body) {
        const data = await fetchData(this.uri + `/admin/${id}`, "POST", body);
        return data;
    }

    async deleteHotel(id) {
        const data = await fetchData(this.uri + `/admin/${id}`, "DELETE");
        return data;
    }

    async HotelRooms(id) {
        const data = await fetchDataGET(this.uri + `/rooms/${id}`, "GET");
        return data;
    }

    async Hotels() {
        const data = await fetchDataGET(this.uri + `/find/all`, "GET");
        return data;
    }

    async HotelInformation(id) {
        const data = await fetchDataGET(this.uri + `/find/${id}`, "GET");
        return data;
    }

    async HotelSummaries() {
        const data = await fetchDataGET(this.uri + `/summary`, "GET");
        return data;
    }

    qHotels(type, city) {
        return `return ${type} hotels in ${city}`;
    }
}
